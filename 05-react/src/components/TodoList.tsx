import { FormEvent, useEffect, useMemo, useState } from 'react'
import { TodoItem } from '../App'

type TodoListProps = {
  todos: TodoItem[]
  onAdd: (title: string) => void
  onToggle: (id: number) => void
}

export function TodoList({ todos, onAdd, onToggle }: TodoListProps) {
  const [title, setTitle] = useState('')

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  )

  useEffect(() => {
    document.title = `Todos: ${completedCount}/${todos.length}`
  }, [completedCount, todos.length])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalized = title.trim()
    if (normalized.length < 3) {
      return
    }

    onAdd(normalized)
    setTitle('')
  }

  return (
    <section>
      <h2>Todos</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder='Add a todo'
        />
        <button type='submit'>Add</button>
      </form>

      <p>
        Completed: {completedCount}/{todos.length}
      </p>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>

      {/* TODO: Show "No todos yet" message if list is empty */}
      {/* TODO: Add filter buttons: all | active | completed */}
    </section>
  )
}
