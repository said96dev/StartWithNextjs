import React from 'react'
import EditForm from '@/app/components/EditForm'
import Link from 'next/link'
import { getTaskById } from '../../../utils/action'

const page = async ({ params }) => {
  const task = await getTaskById(params.id)
  console.log(task)
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  )
}

export default page
