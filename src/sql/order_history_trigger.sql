CREATE OR REPLACE FUNCTION log_order_status_change() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.order_status IS DISTINCT FROM OLD.order_status THEN
        INSERT INTO OrderHistory (order_id, old_status, new_status, changed_by)
        VALUES (OLD.id, OLD.order_status, NEW.order_status, NEW.user_id);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
