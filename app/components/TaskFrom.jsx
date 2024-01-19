import { createTask } from '@/utils/action'

const TaskFrom = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-borderd join-item w-full"
          placeholder="Type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          create Task
        </button>
      </div>
    </form>
  )
}

export default TaskFrom
