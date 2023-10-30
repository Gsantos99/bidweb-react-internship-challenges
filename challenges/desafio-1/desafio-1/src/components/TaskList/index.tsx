import React from 'react'
import TaskItem from '../TaskItem'
import Task from '../../models/Task'
import { StyledUl } from './style'

type TaskListProps = {
  tasks: Task[]
  onEdit: (taskId: string) => void
  onDelete: (taskId: string) => void
  onToggle: (taskId: string) => void
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
  onToggle
}) => (
  <StyledUl>
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </StyledUl>
)

export default TaskList
