import type { DB } from '..';
import { expenseTags } from '../schemas';

export default async function seed(db: DB) {
  await db.insert(expenseTags).values(values);
}

const values = [
  {
    tagId: 3,
    expenseId: 1,
  },
  {
    tagId: 1,
    expenseId: 2,
  },
];
