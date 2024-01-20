'use client'

import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { updataTask } from '@/utils/action'
import toast from 'react-hot-toast'

const EditButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block btn-sm"
      disabled={pending}
    >
      {pending ? 'Editing...' : 'Edit'}
    </button>
  )
}

const initialState = {
  msg: null,
}

const EditFormCustom = ({ task }) => {
  const [state, formAction] = useFormState(updataTask, initialState)

  useEffect(() => {
    if (state.msg === 'error') {
      toast.error('there is an error')
      return
    }
    if (state.msg) {
      toast.success('task updated successfully')
      return
    }
  }, [state.msg])
  const { id, completed, content } = task
  return (
    <form
      action={formAction}
      className="max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg"
    >
      <input type="hidden" name="id" value={id} />

      <input
        type="text"
        className="input input-borderd join-item w-full"
        placeholder="Type here"
        name="content"
        required
        defaultValue={content}
      />
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <EditButton />
      </div>
    </form>
  )
}

export default EditFormCustom
