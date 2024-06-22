'use server';

import { db } from './db';

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function authenticate(token: string) {
  await delay(100);

  console.log(token);
}

export async function getExpenses() {
  const expenses = await db.query.expenses.findMany();
  return expenses;
}
