import { getTableName, Table, sql } from "drizzle-orm";
import { connection, DB, db } from ".";
import * as seeds from './seeds';
import { tags } from "./schemas";

async function resetTable(db: DB, table: Table) {
  return db.execute(sql.raw(`TRUNCATE ${getTableName(table)} RESTART IDENTITY CASCADE`));
}

for (const table of [tags]) {
  await resetTable(db, table);
}

await seeds.tags(db);
await seeds.expenses(db);

await connection.end()
