CREATE TABLE users (
    id TEXT PRIMARY KEY,
    ms_id TEXT,
    username TEXT,
    arole TEXT DEFAULT ('customer') 
        CHECK (arole IN ('guest' , 'customer' , 'staff' , 'manager' , 'admin'))
);

CREATE TABLE user_session (
    id TEXT PRIMARY KEY,
    expires_at TIMESTAMPTZ NOT NULL,
    user_id TEXT NOT NULL REFERENCES users(id)
);