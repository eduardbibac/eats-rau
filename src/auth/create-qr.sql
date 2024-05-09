CREATE TABLE QRSession (
    code text PRIMARY KEY,
    inserted_at timestamp
);


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

