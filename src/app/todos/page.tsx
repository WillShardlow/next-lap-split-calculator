import Link from 'next/link';
import { prisma } from '@/db';
import { TodoItem } from '@/components/TodoItem';

const toggleTodo = async (id: string, complete: boolean) => {
  'use server';

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete,
    },
  });
};

export default async function Todos() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="todos/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} toggleTodo={toggleTodo} {...todo}></TodoItem>
        ))}
      </ul>
    </>
  );
}
