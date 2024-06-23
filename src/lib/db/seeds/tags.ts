import type { DB } from '..';
import { tags } from '../schemas';

export default async function seed(db: DB) {
  const values = [
    { name: 'groceries' },
    { name: 'transport' },
    { name: 'restaurant' },
    { name: 'pharmacy' },
    { name: 'events' },
    { name: 'books' },
    { name: 'games' },
    { name: 'furniture' },
    { name: 'other' },
  ];

  await db.insert(tags).values(values);
}
