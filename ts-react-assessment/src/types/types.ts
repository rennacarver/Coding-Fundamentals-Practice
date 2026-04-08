type Task = {
  id: string
  title: string
  description: string
}

type TasksByPriority = {
  'high priority': Task[]
  'medium priority': Task[]
  'low priority': Task[]
}

export type { Task, TasksByPriority }
