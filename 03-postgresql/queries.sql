-- 1) List all users sorted by newest first.
SELECT *
FROM app_user
ORDER BY created_at DESC;

-- 2) Show task title with owner name using a JOIN.
SELECT t.id, t.title, t.status, u.full_name
FROM tasks t
JOIN app_user u ON t.user_id = u.id
ORDER BY t.id;

-- 3) Count tasks by status.
SELECT status, COUNT(*) AS task_count
FROM tasks
GROUP BY status
ORDER BY task_count DESC;

-- 4) TODO: Find users with more than 1 task.

-- 5) TODO: Find average estimate hours by status.

-- 6) TODO: Return only overdue tasks (due_date before today) that are not done.

-- 7) TODO: Update one task status to done, then return that row.

-- 8) TODO: Delete a user and observe cascade delete behavior on tasks.
