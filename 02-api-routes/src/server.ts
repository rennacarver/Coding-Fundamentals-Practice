import express, { NextFunction, Request, Response } from 'express'
import { todosRouter } from './routes/todos'

const app = express()
app.use(express.json())

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ data: { ok: true }, error: null })
})

app.use('/api/todos', todosRouter)

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const message = err instanceof Error ? err.message : 'Unexpected error'
  res.status(500).json({ data: null, error: { message } })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
