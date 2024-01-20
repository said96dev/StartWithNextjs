'use server'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
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
  const Task = z.object({
    content: z.string().min(5),
  })
  try {
    Task.parse({ content })
    await prisma.task.create({
      data: {
        content,
      },
    })
    revalidatePath('/tasks')
    return { msg: 'success' }
  } catch (error) {
    console.log(error)
    return { msg: 'error' }
  }
}

export const deleteTask = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const id = formData.get('id')
  try {
    await prisma.task.delete({
      where: { id },
    })
    revalidatePath('/tasks')
    return { msg: 'success' }
  } catch {
    return { msg: 'error' }
  }
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
