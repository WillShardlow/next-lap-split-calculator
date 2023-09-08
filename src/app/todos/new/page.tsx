'use client';

import Link from 'next/link';
import { createTodo } from '@/app/todos/new/createTodo';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

const submitAndReturnHome = async (
  data: FormData,
  router: AppRouterInstance,
) => {
  await createTodo(data);
  router.push('.');
};

export default function NewTodo() {
  const router = useRouter();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Todo</h1>
      </header>
      <form
        action={(data) => submitAndReturnHome(data, router)}
        className="flex gap-2 flex-col"
      >
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href="."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
