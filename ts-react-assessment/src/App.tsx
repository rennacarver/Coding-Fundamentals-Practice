import './App.css'
import { useState } from 'react'
import rawTasksData from '../prioritiesTasksData.json'
import type { TasksByPriority } from './types/types'
import PriorityBlock from './components/PriorityBlock'
import AddTaskBlock from './components/AddTaskBlock'

function App() {
  const [tasksData, setTasksData] = useState<TasksByPriority>(
    rawTasksData as TasksByPriority,
  )
  {
    /*Need to verify data at runtime as well */
  }

  return (
    <main className='todo-page'>
      <AddTaskBlock tasksData={tasksData} setTasksData={setTasksData} />
      <h1 className='todo-title'>To-Do List</h1>
      <section className='priority-list'>
        {Object.entries(tasksData).map(([priorityLevel, priorityTasks]) => (
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
