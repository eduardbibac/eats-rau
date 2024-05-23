CREATE TABLE users (
    id          TEXT PRIMARY KEY,
    ms_id       TEXT,
    username    TEXT,
    email       TEXT,
    pic_link    TEXT,
    -- is_english  BOOLEAN,
    arole       TEXT DEFAULT ('staff') 
        CHECK (arole IN ('guest' , 'customer' , 'staff' , 'manager' , 'admin'))
);

CREATE TABLE user_session (
    id TEXT     PRIMARY KEY,
    expires_at  TIMESTAMPTZ NOT NULL,
    user_id     TEXT NOT NULL REFERENCES users(id),

    device      TEXT
);

CREATE TABLE QRSession (
    code text PRIMARY KEY,
    inserted_at TIMESTAMP DEFAULT NOW(),
	is_validated_by_user TEXT REFERENCES users(id)
);

CREATE TABLE Guest_SESSION_Request();


CREATE TABLE operating_days (
    id          SERIAL PRIMARY KEY,  -- Unique identifier for each day
    schedule_date DATE NOT NULL,     -- The date of the schedule
    CONSTRAINT unique_schedule_date UNIQUE (schedule_date)  -- Ensures one entry per day
);

CREATE TABLE operating_hours (
    start_date  TIMESTAMP NOT NULL,  -- Starting date and time
    end_date    TIMESTAMP NOT NULL,  -- Ending date and time
    CHECK (end_date > start_date),   -- Ensures that the end date is after the start date
    CONSTRAINT unique_day UNIQUE (date_trunc('day', start_date))  -- Ensures one schedule per day.. TODO PER MOTNH/DAY+YEAR
);

-- Menu trdaitional: ciroba de burta ... 
-- Menu de sarbatori: sarmale
CREATE TABLE menu (
    id                   SERIAL PRIMARY KEY,
    menu_name            TEXT NOT NULL,
    is_active           BOOLEAN NOT NULL DEFAULT TRUE,
);

CREATE TABLE menu_products (
    menu_id             INT NOT NULL REFERENCES menu(id),
    product_id          INT NOT NULL,

    PRIMARY KEY (menu_id, product_id)
);

CREATE TABLE products (
    id                   SERIAL PRIMARY KEY,
    price                NUMERIC(10,2) CHECK (price > 0),
    category             TEXT NOT NULL,
    ro_product_name      TEXT NOT NULL,
    en_product_name      TEXT NOT NULL,
    quantity             INT NOT NULL CHECK (quantity > 0)
    -- is_listed         BOOLEAN (not necessary because we will work with menu, if it's in the menu it's actively listed product)
);

CREATE TABLE orders (
    id                  SERIAL PRIMARY KEY,
    user_id             INT NOT NULL REFERENCES users(id),
    order_status        TEXT NOT NULL CHECK (order_status IN ('pending', 'in_progress', 'ready_for_pickup', 'completed', 'canceled')),
    order_type          TEXT NOT NULL CHECK (order_type IN ('dine_in', 'pickup')),
    payment_status      TEXT NOT NULL DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid')) ,
    payment_method      TEXT NOT NULL CHECK (payment_method IN ('cash', 'card')),
    is_scheduled_at     TIMESTAMP
);

CREATE TABLE order_products (
    product_id          INT NOT NULL REFERENCES products(id),
    order_id            INT NOT NULL REFERENCES orders(id),
    quantity            INT NOT NULL CHECK (quantity > 0),
    price_paid          NUMERIC(10,2) NOT NULL,

    PRIMARY KEY (product_id, order_id)
);



CREATE TABLE order_history (
    order_id            SERIAL FOREIGN KEY REFERENCES orders(id),

    change_timestamp    TIMESTAMP DEFAULT NOW(),
    order_status        TEXT CHECK (order_status IN ('pending', 'in_progress', 'ready_for_pickup', 'completed', 'canceled')),
    order_type          TEXT CHECK (order_type IN ('dine_in', 'pickup')),
    payment_status      TEXT DEFAULT ('unpaid') CHECK (payment_status IN ('unpaid', 'paid')) ,
    payment_method      TEXT CHECK (payment_method IN ('cash', 'card')),
);
-- Trigger that records every change
-- Then just order by change_timestamp and group by order_id to get complete chronological history 


