import { useState, useEffect } from 'react'
import Task from '../models/Task'

export function TaskController() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editTask, setEditTask] = useState<Task | null>(null)
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all')

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    const isStoredTasks = storedTasks.length < 1

    if (isStoredTasks) {
      return
    } else {
      setTasks(storedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string) => {
    if (!title) {
      alert('Digite uma tarefa ')
      return
    }

    if (editTask) {
      const updatedTasks = tasks.map(task =>
        task.id === editTask.id ? { ...task, title } : task
      )
      setTasks(updatedTasks)
      setEditTask(null)
    } else {
      const newTask = new Task(title)
      setTasks([...tasks, newTask])
    }
  }

  const editTaskHandler = (taskId: string) => {
    const taskToEdit = tasks.find(task => task.id === taskId)
    if (taskToEdit) {
      setEditTask(taskToEdit)
    }
  }

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
    setEditTask(null)
  }

  const toggleTask = (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true
    } else if (filter === 'completed') {
      return task.completed
    } else {
      return !task.completed
    }
  })

  return {
    tasks,
    editTask,
    filter,
    addTask,
    editTaskHandler,
    deleteTask,
    toggleTask,
    filteredTasks,
    setFilter
  }
}
