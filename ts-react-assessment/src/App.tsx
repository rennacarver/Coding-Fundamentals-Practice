import './App.css'
import rawTasksData from '../prioritiesTasksData.json'
import type { TasksByPriority } from './types/types'
import PriorityBlock from './components/PriorityBlock'

function App() {
  const TasksData = rawTasksData as TasksByPriority
  {
    /*Need to verify data at runtime as well */
  }

  return (
    <main className='todo-page'>
      <h1 className='todo-title'>To-Do List</h1>
      <section className='priority-list'>
        {Object.entries(TasksData).map(([priorityLevel, priorityTasks]) => (
          <PriorityBlock
            key={priorityLevel}
            title={priorityLevel}
            tasks={priorityTasks}
          />
        ))}
      </section>
    </main>
  )
}

export default App
