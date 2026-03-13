# 02 - API Routes with Express

This module focuses on route design and backend fundamentals.

## Competencies

- Route handlers for CRUD
- Request body validation
- HTTP status code conventions
- Error handling middleware
- Consistent JSON response shape

## Tasks

1. Review `src/server.ts` and `src/routes/todos.ts`.
2. Complete TODOs in route handlers.
3. Add pagination to `GET /api/todos`.
4. Add an endpoint to mark all todos complete.

## Suggested Response Shape

```json
{
  "data": {},
  "error": null
}
```

or

```json
{
  "data": null,
  "error": {
    "message": "Validation failed"
  }
}
```
