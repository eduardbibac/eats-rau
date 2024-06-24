ALTER SYSTEM SET wal_level = logical; -- NEEDS RESTART!
CREATE PUBLICATION insert_orders FOR TABLE orders
    WITH (publish = 'insert');

SET TIMEZONE='Europe/Bucharest';
CREATE TABLE users (
    id              TEXT PRIMARY KEY,
    ms_id           TEXT,
    username        TEXT,
    email           TEXT,
    pic_link        TEXT,
    password_hash   TEXT,
    -- is_english  BOOLEAN,
    arole           TEXT DEFAULT ('customer') 
        CHECK (arole IN ('guest' , 'customer' , 'staff' , 'manager' , 'admin'))
);

CREATE TABLE user_session (
    id TEXT     PRIMARY KEY,
    expires_at  TIMESTAMPTZ NOT NULL,
    user_id     TEXT NOT NULL REFERENCES users(id),

    device      TEXT
);

CREATE TABLE QRSession (
    code                 TEXT PRIMARY KEY,
    inserted_at          TIMESTAMP DEFAULT NOW(),
	is_validated_by_user TEXT REFERENCES users(id)
);

CREATE TABLE guest_session_request(
    code                 TEXT PRIMARY KEY,
    inserted_at          TIMESTAMP DEFAULT NOW(),
	is_validated_by_user TEXT REFERENCES users(id)
);

CREATE TABLE operating_days (
    day DATE NOT NULL PRIMARY KEY
);

CREATE TABLE operating_hours (
    hour_start       TIME NOT NULL,
    hour_end         TIME NOT NULL,
    operating_day    DATE NOT NULL REFERENCES operating_days(day),
	
	CHECK (hour_end > hour_start),   -- Ensures that the end date is after the start date
    PRIMARY KEY (hour_start, hour_end)
);

-- Categories: id:1, name:breakfast
-- Products: id:1, ronume:Sarmale, pret:35.99,  category:1


-- Menu: id:1, name:Traditional, pos:1 
    -- menu_products: menu:1, product:1
-- Menu de sarbatori: sarmale
CREATE TABLE menu (
    id                  SERIAL PRIMARY KEY,
    menu_name           TEXT NOT NULL,
    is_active           BOOLEAN DEFAULT FALSE,

    list_position       INT
);

CREATE TABLE products (
    id                   SERIAL PRIMARY KEY,
    price                NUMERIC(10,2) CHECK (price > 0),
    ro_product_name      TEXT NOT NULL,
    en_product_name      TEXT NOT NULL,
    image_link           TEXT NOT NULL
    
    -- is_listed         BOOLEAN (not necessary because we will work with menu, if it's in the menu it's actively listed product)
);

CREATE TABLE menu_products (
    menu_id             INT NOT NULL REFERENCES menu(id) ON DELETE CASCADE,
    product_id          INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    menu_quantity       INT NOT NULL CHECK (menu_quantity > 0),
    -- Ask staff: Is the menu prepared today? if yes, then set current_quant = menu_quant;
    current_quantity    INT NOT NULL CHECK (current_quantity >= 0),
    list_position       INT,

    PRIMARY KEY (menu_id, product_id)
);

CREATE TABLE categories(
    id                   SERIAL PRIMARY KEY,
    list_position        INT NOT NULL UNIQUE,
    ro_name              TEXT NOT NULL,
    en_name              TEXT NOT NULL
);


CREATE TABLE product_categories (
    category_id         INT NOT NULL REFERENCES categories(id),
    product_id          INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
           
    PRIMARY KEY (category_id, product_id)
);

CREATE VIEW products_with_categories AS
SELECT p.id, p.ro_product_name, p.en_product_name, p.price,
    array_agg(COALESCE(c.ro_name, '')) as ro_categories, 
    array_agg(COALESCE(c.en_name, '')) as en_categories,
	p.image_link
FROM products p
LEFT JOIN product_categories pc ON pc.product_id = p.id
LEFT JOIN categories c ON pc.category_id= c.id
GROUP BY p.id;

CREATE VIEW products_on_sale AS
SELECT p.id, mp.list_position, p.price, 
    p.en_product_name, p.en_categories, 
    p.ro_product_name, p.ro_categories,
    mp.current_quantity, p.image_link as image,
    m.list_position as menu_list_position
FROM products_with_categories p
JOIN menu_products mp ON p.id = mp.product_id
JOIN menu m ON mp.menu_id = m.id
WHERE m.is_active = TRUE;

-- What about STALE ORDER?
-- orders that are not in a finalized state: completed/canceled,
-- or a valid running state: within schedule(under the scheduled time)
-- AND haven't been touched ? 

-- What about cancelation reason, for example 
-- (staff canceled order because unpaid) : unpaid ready orders *_*
-- (staff canceled order because spam)
-- (user canceled order -within time- because changed his mind)
CREATE TABLE orders (
    id                  SERIAL PRIMARY KEY,
    user_id             TEXT NOT NULL REFERENCES users(id),
    order_status        TEXT NOT NULL CHECK (order_status IN ('pending', 'in_progress', 'ready_for_pickup', 'completed', 'canceled')),
    order_type          TEXT NOT NULL CHECK (order_type IN ('dine_in', 'pickup')),
    payment_method      TEXT NOT NULL CHECK (payment_method IN ('cash', 'card')),
    payment_status      TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid')),
    is_scheduled_at     TIMESTAMP DEFAULT NOW(),
	
	changed_by			TEXT
);

CREATE TABLE order_history (
    id		            SERIAL PRIMARY KEY,
    order_id 			INT NOT NULL REFERENCES orderS(id),
    order_status        TEXT NOT NULL CHECK (order_status IN ('pending', 'in_progress', 'ready_for_pickup', 'completed', 'canceled')),
    order_type          TEXT NOT NULL CHECK (order_type IN ('dine_in', 'pickup')),
    payment_method      TEXT NOT NULL CHECK (payment_method IN ('cash', 'card')),
    payment_status      TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid')) ,
    is_scheduled_at     TIMESTAMP DEFAULT NOW(),
	
    change_timestamp    TIMESTAMP DEFAULT NOW(),
	changed_by			TEXT
);

CREATE TABLE order_products (
	id		            SERIAL PRIMARY KEY,
	order_id 			INT NOT NULL REFERENCES orders(id),
	product_id			INT NOT NULL REFERENCES products(id),
	price_paid			NUMERIC(10,2) NOT NULL,
	quantity            INT NOT NULL CHECK (quantity > 0)
);

CREATE VIEW view_complete_order AS
SELECT 
  o.id, u.username, o.order_status, o.order_type, o.payment_method, 
  o.payment_status, o.is_scheduled_at, o.changed_by,
  sum(pc.price * op.quantity) as total_cost,
  json_agg(
    json_build_object(
	  'product_id',      op.product_id,
      'ro_product_name', pc.ro_product_name, 
      'en_product_name', pc.en_product_name, 
      'price', pc.price, 
      'quantity', op.quantity,
	  'ro_categories', pc.ro_categories,
	  'en_categories', pc.ro_categories
    )
  ) as products
FROM orders o
JOIN order_products op ON op.order_id = o.id
JOIN products_with_categories pc ON pc.id = op.product_id
JOIN users u ON u.id = o.user_id
GROUP BY o.id, u.username
ORDER BY o.is_scheduled_at ASC;


CREATE OR REPLACE FUNCTION log_order_change() 
RETURNS TRIGGER AS $$
BEGIN
    -- Insert a new record into order_history with the current state of the order
    INSERT INTO order_history (
        order_id, 
        order_status, 
        order_type, 
        payment_method, 
        payment_status, 
        is_scheduled_at,
		changed_by
    )
    VALUES (
        NEW.id, 
        NEW.order_status, 
        NEW.order_type, 
        NEW.payment_method, 
        NEW.payment_status, 
        NEW.is_scheduled_at,
		NEW.changed_by
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER after_order_change
AFTER INSERT OR UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION log_order_change();


CREATE FUNCTION QRSession_delete_old_rows() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM QRSession WHERE inserted_at < NOW() - INTERVAL '5 minute';
  RETURN NEW;
END;
$$;

CREATE TRIGGER QRSession_trigger_delete_old_rows
    AFTER INSERT ON QRSession
    EXECUTE PROCEDURE QRSession_delete_old_rows();