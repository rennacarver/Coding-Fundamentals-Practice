type TaskBlockProps = {
  description: string
  title: string
}

function TaskBlock({ description, title }: TaskBlockProps) {
  return (
    <div className='task-block'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TaskBlock
