import React from 'react'
import TaskList from '../components/TaskList'
import TaskFromCustom from '../components/TaskFromCustom'
const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFromCustom />
      <TaskList />
    </div>
  )
}

export default TasksPage
