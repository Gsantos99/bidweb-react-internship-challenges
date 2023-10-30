import React, { useState } from 'react'
import Task from '../../models/Task'
import { StyledForm } from './style'

type TaskFormProps = {
  onSubmit: (title: string) => void
  editTask: Task | null
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, editTask }) => {
  const [title, setTitle] = useState(editTask ? editTask.title : '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(title)
    setTitle('')
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">{editTask ? 'Editar' : 'Adicionar'}</button>
    </StyledForm>
  )
}

export default TaskForm
