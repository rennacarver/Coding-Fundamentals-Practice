DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS app_user;

CREATE TABLE app_user (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('todo', 'in_progress', 'done')),
  due_date DATE,
  estimate_hours NUMERIC(5,2) CHECK (estimate_hours >= 0),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);

INSERT INTO app_user (email, full_name) VALUES
('ren@example.com', 'Ren Carver'),
('kai@example.com', 'Kai Morgan'),
('mia@example.com', 'Mia Chen');

INSERT INTO tasks (user_id, title, status, due_date, estimate_hours) VALUES
(1, 'Review TypeScript unions', 'todo', '2026-03-15', 1.5),
(1, 'Build Express POST route', 'in_progress', '2026-03-16', 2.0),
(2, 'Create React form', 'done', '2026-03-10', 1.25),
(2, 'Write SQL join query', 'todo', '2026-03-18', 1.0),
(3, 'Design Mongo collection', 'in_progress', '2026-03-20', 2.5);
