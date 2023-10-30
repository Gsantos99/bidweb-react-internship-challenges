import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import Header from '../components/Header'
import TaskFilter from '../components/TaskFilter'
import { TaskController } from '../controllers/taskController'

const Bidtodo: React.FC = () => {
  const {
    editTask,
    filter,
    addTask,
    editTaskHandler,
    deleteTask,
    toggleTask,
    filteredTasks,
    setFilter
  } = TaskController()

  return (
    <>
      <Header title="Bid To-do" />
      <TaskForm onSubmit={addTask} editTask={editTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onEdit={editTaskHandler}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </>
  )
}

export default Bidtodo
