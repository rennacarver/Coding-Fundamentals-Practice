import { Router, Request, Response } from 'express'

type Todo = {
  id: number
  title: string
  completed: boolean
}

const todos: Todo[] = [
  { id: 1, title: 'Review TypeScript narrowing', completed: false },
  { id: 2, title: 'Write first Express route', completed: true },
]

export const todosRouter = Router()

todosRouter.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ data: todos, error: null })
})

todosRouter.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const todo = todos.find((item) => item.id === id)

  if (!todo) {
    return res
      .status(404)
      .json({ data: null, error: { message: 'Todo not found' } })
  }

  return res.status(200).json({ data: todo, error: null })
})

todosRouter.post('/', (req: Request, res: Response) => {
  const { title } = req.body as { title?: string }

  if (!title || title.trim().length < 3) {
    return res
      .status(400)
      .json({
        data: null,
        error: { message: 'Title must be at least 3 chars' },
      })
  }

  const todo: Todo = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
  }

  todos.push(todo)
  return res.status(201).json({ data: todo, error: null })
})

todosRouter.patch('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { title, completed } = req.body as {
    title?: string
    completed?: boolean
  }

  const todo = todos.find((item) => item.id === id)
  if (!todo) {
    return res
      .status(404)
      .json({ data: null, error: { message: 'Todo not found' } })
  }

  if (typeof title === 'string') {
    todo.title = title.trim()
  }

  if (typeof completed === 'boolean') {
    todo.completed = completed
  }

  return res.status(200).json({ data: todo, error: null })
})

todosRouter.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const index = todos.findIndex((item) => item.id === id)

  if (index === -1) {
    return res
      .status(404)
      .json({ data: null, error: { message: 'Todo not found' } })
  }

  const [deleted] = todos.splice(index, 1)
  return res.status(200).json({ data: deleted, error: null })
})

// TODO: Add query validation for pagination values: ?page=1&limit=10
// TODO: Add a route `PATCH /api/todos/:id/toggle`
// TODO: Add a centralized validation utility
