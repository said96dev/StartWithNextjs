'use client'

import { createTaskCustom } from '@/utils/action'
import { useFormStatus, useFormState } from 'react-dom'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}

const initialState = {
  msg: null,
}

const TaskFrom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  useEffect(() => {
    if (state.msg === 'error') {
      toast.error('there is an error')
      return
    }
    if (state.msg) {
      toast.success('task created successfully')
      return
    }
  }, [state.msg])

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskFrom
