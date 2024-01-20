'use client'

import React, { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import { deleteTask } from '@/utils/action'
import toast from 'react-hot-toast'

const DeleteBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="btn btn-xs btn-error ">
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  )
}

const initialState = {
  msg: null,
}

const DeleteFormCustom = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, initialState)

  useEffect(() => {
    if (state.msg === 'error') {
      toast.error('there is an error')
      return
    }
    if (state.msg) {
      toast.success('task deleted successfully')
      return
    }
  }, [state.msg])

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  )
}

export default DeleteFormCustom
