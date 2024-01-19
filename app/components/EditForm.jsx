import React from 'react'
import { updataTask } from '@/utils/action'

const EditForm = ({ task }) => {
  const { id, completed, content } = task
  return (
    <form
      action={updataTask}
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
      </div>
      <button className="btn btn-primary btn-block btn-sm">edit</button>
    </form>
  )
}

export default EditForm
