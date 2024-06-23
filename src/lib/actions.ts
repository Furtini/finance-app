'use server';

import { eq } from 'drizzle-orm';

import { db } from './db';
import { expenseTags, expenses, tags } from './db/schemas';

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function authenticate(token: string) {
  await delay(100);

  console.log(token);
}

export async function getExpenses() {
  const result = await db.query.expenses.findMany({
    with: {
      tags: {
        columns: {},
        with: {
          tag: true,
        },
      },
    },
  });

  const result2 = await db
    .select()
    .from(expenses)
    .innerJoin(expenseTags, eq(expenseTags.expenseId, expenses.id))
    .innerJoin(tags, eq(expenseTags.tagId, tags.id));

  console.log(result2);
  return result;
}
