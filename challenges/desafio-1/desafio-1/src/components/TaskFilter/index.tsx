import React from 'react'
import { Container } from './style'

type TaskFilterProps = {
  legend?: string
  filter: string
  setFilter: React.Dispatch<
    React.SetStateAction<'all' | 'completed' | 'pending'>
  >
}

const TaskFilter = ({ legend, filter, setFilter }: TaskFilterProps) => {
  return (
    <Container>
      <label>
        {legend ? legend : 'Filtro: '}
        <select
          value={filter}
          onChange={e =>
            setFilter(e.target.value as 'all' | 'completed' | 'pending')
          }
        >
          <option value="all">Todas</option>
          <option value="completed">Concluídas</option>
          <option value="pending">Pendentes</option>
        </select>
      </label>
    </Container>
  )
}

export default TaskFilter
