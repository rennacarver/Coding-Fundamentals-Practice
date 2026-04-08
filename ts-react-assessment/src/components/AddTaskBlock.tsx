import { useState } from 'react'
import './AddTaskBlock.css'
import type { TasksByPriority, Task } from '../types/types'

type AddTaskBlockProps = {
  tasksData: TasksByPriority
  setTasksData: React.Dispatch<React.SetStateAction<TasksByPriority>>
}

function AddTaskBlock({ tasksData, setTasksData }: AddTaskBlockProps) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] =
    useState<keyof TasksByPriority>('high priority')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
    }

    if (!newTask.title || !newTask.description) return

    const tempData = { ...tasksData }

    if (priority === 'high priority') {
      tempData['high priority'].push(newTask)
    } else if (priority == 'medium priority') {
      tempData['medium priority'].push(newTask)
    } else {
      tempData['low priority'].push(newTask)
    }

    setTasksData(tempData)
    setTitle('')
    setPriority('high priority')
    setDescription('')
  }

  return (
    <div className='add-task-block'>
      <h3>Add New Task</h3>

      <label>
        Title
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter task title'
          rows={1}
        />
      </label>

      <label>
        Priority
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as keyof TasksByPriority)}
        >
          <option value='high priority'>High Priority</option>
          <option value='medium priority'>Medium Priority</option>
          <option value='low priority'>Low Priority</option>
        </select>
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task description'
          rows={3}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddTaskBlock
