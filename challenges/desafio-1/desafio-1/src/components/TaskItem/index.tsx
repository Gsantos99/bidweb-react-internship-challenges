import React from 'react'
import Task from '../../models/Task'
import { StyledLi } from './style'


type TaskItemProps = {
  task: Task
  onEdit: (taskId: string) => void
  onDelete: (taskId: string) => void
  onToggle: (taskId: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onEdit,
  onDelete,
  onToggle
}) => (
  <StyledLi>
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.title}
    </span>
    <button onClick={() => onToggle(task.id)}>Concluir</button>
    <button onClick={() => onEdit(task.id)}>Editar</button>
    <button onClick={() => onDelete(task.id)}>Excluir</button>
  </StyledLi>
)

export default TaskItem
