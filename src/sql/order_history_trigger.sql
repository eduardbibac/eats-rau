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




