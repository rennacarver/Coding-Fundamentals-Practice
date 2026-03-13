import { useState } from 'react'
import { CounterCard } from './components/CounterCard'
import { TodoList } from './components/TodoList'

export type TodoItem = {
  id: number
  title: string
  completed: boolean
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: 'Learn React state', completed: false },
    { id: 2, title: 'Practice controlled inputs', completed: true },
  ])

  function addTodo(title: string) {
    const next: TodoItem = {
      id: Date.now(),
      title,
      completed: false,
    }

    setTodos((current) => [next, ...current])
  }

  function toggleTodo(id: number) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  return (
    <main>
      <h1>React Fundamentals Playground</h1>
      <CounterCard label='Session Focus Score' />
      <TodoList todos={todos} onAdd={addTodo} onToggle={toggleTodo} />
    </main>
  )
}
