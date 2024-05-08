CREATE TABLE user (
    id TEXT PRIMARY KEY,
    ms_id NUMBER,
    username TEXT
)

CREATE TABLE user_session (
    id TEXT PRIMARY KEY,
    expires_at TIMESTAMPTZ NOT NULL,
    user_id TEXT NOT NULL REFERENCES user(id)
)
