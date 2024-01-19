import React from 'react'
import { deleteTask } from '@/utils/action'

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-xs btn-error ">
        Delete
      </button>
    </form>
  )
}

export default DeleteForm
