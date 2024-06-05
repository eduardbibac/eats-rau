DROP TABLE IF EXISTS users cascade; 
DROP TABLE IF EXISTS user_session cascade;
DROP TABLE IF EXISTS QRSession cascade;
DROP TABLE IF EXISTS guest_session_request cascade;
DROP TABLE IF EXISTS operating_days cascade;
DROP TABLE IF EXISTS operating_hours cascade;
DROP TABLE IF EXISTS menu cascade;
DROP TABLE IF EXISTS menu_products cascade;
DROP TABLE IF EXISTS categories cascade;
DROP TABLE IF EXISTS product_categories cascade;
DROP TABLE IF EXISTS orders cascade;
DROP TABLE IF EXISTS order_history cascade;
DROP TABLE IF EXISTS order_products cascade;
DROP TABLE IF EXISTS products cascade;

DROP VIEW IF EXISTS products_with_categories cascade;
DROP VIEW IF EXISTS products_on_sale cascade;
DROP VIEW IF EXISTS view_complete_order cascade;

drop function if exists qrsession_delete_old_rows;