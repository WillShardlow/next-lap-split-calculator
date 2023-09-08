'use server';

import { prisma } from '@/db';

export const createTodo = async (data: FormData) => {
  const title = data.get('title')?.valueOf();
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid title');
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  });
};
