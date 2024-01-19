'use client'

import { createTaskCustom } from '@/utils/action'
import { useFormStatus, useFormState } from 'react-dom'
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
  return (
    <form action={formAction}>
      {state.msg && <p className="mb-2">{state.msg} </p>}
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
