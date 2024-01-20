import React from 'react'
import EditFormCustom from '@/app/components/EditFormCustom'
import Link from 'next/link'
import { getTaskById } from '../../../utils/action'

const page = async ({ params }) => {
  const task = await getTaskById(params.id)
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to Tasks
        </Link>
      </div>
      <EditFormCustom task={task} />
    </>
  )
}

export default page
