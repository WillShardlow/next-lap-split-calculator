'use server';

import { prisma } from '@/db';

export const createTodo = async (data: FormData) => {
  if (!prisma) {
    throw new Error(
      'Prisma is disabled because IS_PRISMA_ENABLED is set to false.',
    );
  }

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
