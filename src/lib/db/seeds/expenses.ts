import type { DB } from "..";
import { expenses } from "../schemas";

export default async function seed(db: DB) {
  await db.insert(expenses).values(values)
}

const values = [
  {
    date: '2024-01-15',
    interestDate: '2024-01-15',
    expense: 'Dinner at  home',
    category: 'leisure' as const,
    amount: '20.98',
    place: 'New York Pizza',
    note: 'Order from app Thuisbezorgd'
  },
  {
    date: '2024-01-16',
    interestDate: '2024-01-16',
    expense: 'Groceries',
    category: 'needs' as const,
    amount: '5.41',
    place: 'Alber Heijn'
  },
];

