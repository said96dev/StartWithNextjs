'use server'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { created_at: 'desc' },
  })
  return tasks
}

export const createTask = async (formData) => {
  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content,
    },
  })
  revalidatePath('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
  //await new Promise((resolve) => setTimeout(resolve, 2000))

  const content = formData.get('content')
  try {
    await prisma.task.create({
      data: {
        content,
      },
    })
    revalidatePath('/tasks')
    return { msg: 'success' }
  } catch (error) {
    return { msg: error.message }
  }
}

export const deleteTask = async (formData) => {
  const id = formData.get('id')
  await prisma.task.delete({
    where: { id },
  })
  revalidatePath('/tasks')
}

export const updataTask = async (formData) => {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')
  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === 'on' ? true : false },
  })
  revalidatePath('/tasks')
}

export const getTaskById = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  })
  return task
}
