type Role = 'student' | 'teacher'

interface User {
  id: number
  name: string
  role: Role
  email?: string
}

const users: User[] = [
  { id: 1, name: 'Ren', role: 'student' },
  { id: 2, name: 'Kai', role: 'teacher', email: 'kai@example.com' },
]

function printUser(user: User): string {
  return `${user.name} (${user.role})`
}

type Student = User & { role: 'student'; track: 'frontend' | 'backend' }
type Teacher = User & { role: 'teacher'; specialty: string }
type Member = Student | Teacher

function describeMember(member: Member): string {
  if (member.role === 'teacher') {
    return `${member.name} teaches ${member.specialty}`
  }

  return `${member.name} is in ${member.track}`
}

function firstItem<T>(items: T[]): T | undefined {
  return items[0]
}

type UserPreview = Pick<User, 'id' | 'name'>
type NewUserInput = Omit<User, 'id'>
type UserPatch = Partial<User>
type ReadonlyUser = Readonly<User>

async function fetchUserById(id: number): Promise<User | null> {
  const found = users.find((user) => user.id === id) ?? null
  return Promise.resolve(found)
}

// TODO 1: Create a generic function named `mapById` that takes `{ id: number }[]`
// and returns `Record<number, T>`.

// TODO 2: Write a function `isTeacher(member: Member): member is Teacher`.

// TODO 3: Fix this unsafe parser by introducing `unknown` and narrowing.
function parseUser(json: string): User {
  const parsed = JSON.parse(json)
  return parsed
}

async function run() {
  console.log(printUser(users[0]))
  console.log(firstItem(users))
  console.log(await fetchUserById(2))
  console.log(
    describeMember({ id: 3, name: 'Ari', role: 'teacher', specialty: 'TS' }),
  )

  const preview: UserPreview = { id: 1, name: 'Ren' }
  const newUser: NewUserInput = { name: 'Mia', role: 'student' }
  const patch: UserPatch = { email: 'ren@example.com' }
  const readonly: ReadonlyUser = { id: 99, name: 'Readonly', role: 'student' }

  console.log(preview, newUser, patch, readonly)
}

run()
