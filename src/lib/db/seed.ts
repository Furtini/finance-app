import { Table, getTableName, sql } from 'drizzle-orm';

import { DB, connection, db } from '.';
import { expenseTags, expenses, tags } from './schemas';
import * as seeds from './seeds';

async function resetTable(db: DB, table: Table) {
  return db.execute(sql.raw(`TRUNCATE ${getTableName(table)} RESTART IDENTITY CASCADE`));
}

for (const table of [expenseTags, tags, expenses]) {
  await resetTable(db, table);
}

await seeds.tags(db);
await seeds.expenses(db);
await seeds.expenseTags(db);

await connection.end();
