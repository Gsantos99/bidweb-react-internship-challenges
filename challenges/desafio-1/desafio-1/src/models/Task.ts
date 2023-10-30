import { v4 as uuidv4 } from 'uuid'

class Task {
  id: string
  title: string
  completed: boolean

  constructor(title: string, completed: boolean = false) {
    this.id = uuidv4()
    this.title = title
    this.completed = completed
  }
}

export default Task
