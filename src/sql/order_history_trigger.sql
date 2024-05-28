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

INSERT INTO orders (id, user_id, order_status, order_type, payment_method, payment_status)
VALUES 
    (1, 'maolmyyze7proskv', 'pending', 'dine_in', 'cash', 'unpaid');

UPDATE orders
SET order_status = 'in_progress', changed_by = 'staff'
WHERE id = 1;




BEGIN;
INSERT INTO orders (user_id, order_status, order_type, payment_method, payment_status)
VALUES 
    ('${user.id}', 'pending', '${dineIn}', '${payment_method}', 'unpaid', 'user', changed_by)
RETURNING id as new_order_id;

INSERT INTO order_products(order_id, product_id, price_paid, quantity)
VALUES
	(new_order_id, ${prduct.id}, (SELECT price FROM products p WHERE p.id = ${prduct.id}), {})

COMMIT;



CREATE TABLE order_products (
	...
	price_paid			NUMERIC(10,2) DEFAULT ;
);


select * from orders;

CREATE VIEW admin_orders
SELECT order_id, array_agg(p.en_product_name), array_agg(p.en_product_name), 
user_id, order_status, order_type, payment_status, is_scheduled_at,

FROM orders o
JOIN order_products op ON o.id = op.order_id
JOIN products p on op.product_id = p.id
GROUP BY o.id;


