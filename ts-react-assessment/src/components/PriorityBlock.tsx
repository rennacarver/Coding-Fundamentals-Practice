import type { Task } from '../types/types'
import TaskBlock from './TaskBlock'

type PriorityBlockProps = {
  title: string
  tasks: Task[]
}

function PriorityBlock({ title, tasks }: PriorityBlockProps) {
  return (
    <div className='priority-block'>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskBlock
          title={task.title}
          key={task.id}
          description={task.description}
        />
      ))}
    </div>
  )
}

export default PriorityBlock
