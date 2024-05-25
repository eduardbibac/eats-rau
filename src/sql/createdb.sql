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
    start       TIME NOT NULL,
    end         TIME NOT NULL,
    day         INT NOT NULL REFERENCES operating_days(id),

    PRIMARY KEY (start, end),
    CHECK (end_date > start_date)   -- Ensures that the end date is after the start date
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

    list_postion        INT UNIQUE,
);

CREATE TABLE menu_products (
    menu_id             INT NOT NULL REFERENCES menu(id),
    product_id          INT NOT NULL,
    menu_quantity      INT NOT NULL CHECK (quantity > 0),
    -- Ask staff: Is the menu prepared today? if yes, then set current_quant = menu_quant;
    current_quantity    INT NOT NULL CHECK (current_quantity >= 0),
    list_postion        INT UNIQUE,

    PRIMARY KEY (menu_id, product_id)
);

CREATE TABLE products (
    id                   SERIAL PRIMARY KEY,
    price                NUMERIC(10,2) CHECK (price > 0),
    category             TEXT NOT NULL REFERENCES product_categories(id),
    ro_product_name      TEXT NOT NULL,
    en_product_name      TEXT NOT NULL,
    image_link           TEXT NOT NULL
    
    -- is_listed         BOOLEAN (not necessary because we will work with menu, if it's in the menu it's actively listed product)
);

CREATE TABLE product_categories(
    id                   SERIAL PRIMARY KEY,
    ro_name              TEXT NOT NULL CHECK (name = LOWER(name)),
    en_name              TEXT NOT NULL CHECK (name = LOWER(name))
)

CREATE VIEW products_on_sale AS
SELECT pc.category, p.id, p.price, p.category, p.ro_product_name, p.en_product_name, mp.quantity
FROM products p
JOIN product_categories pc ON p.id = pc.id
JOIN menu_products mp ON p.id = mp.product_id
JOIN menu m ON mp.menu_id = m.id
WHERE m.is_active = TRUE;


-- INSERT ONLY TABLE!
CREATE TABLE orders (
    id                  SERIAL PRIMARY KEY,
    user_id             INT NOT NULL REFERENCES users(id),
    order_status        TEXT NOT NULL CHECK (order_status IN ('pending', 'in_progress', 'ready_for_pickup', 'completed', 'canceled')),
    order_type          TEXT NOT NULL CHECK (order_type IN ('dine_in', 'pickup')),
    payment_method      TEXT NOT NULL CHECK (payment_method IN ('cash', 'card')),
    payment_status      TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid')) ,
    is_scheduled_at     TIMESTAMP DEFAULT NOW(),

    version             INT DEFAULT 1
);
CREATE OR REPLACE VIEW current_orders AS
SELECT *
FROM orders o
WHERE o.version = (
    SELECT MAX(version)
    FROM orders
    WHERE id = o.id
);


