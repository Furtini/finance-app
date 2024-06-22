'server-only';

import {
  date,
  index,
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const categories = pgEnum('categories', [
  'needs',
  'leisure',
  'travels',
  'house',
  'education',
  'free',
]);
export const subcategories = pgEnum('subcategories', [
  'groceries',
  'transport',
  'restaurant',
  'pharmacy',
  'events',
  'books',
  'games',
  'furniture',
  'other',
]);

export const expenses = pgTable(
  'expenses',
  {
    id: serial('id').primaryKey(),
    date: date('date').notNull(),
    interestDate: date('interestDate').notNull(),
    expense: varchar('expense', { length: 400 }).notNull(),

    category: categories('category').notNull(),
    subcategory: subcategories('subcategory').notNull(),

    amount: numeric('amount').notNull(),
    place: varchar('place', { length: 255 }).notNull(),
    note: text('note'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt')
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => {
    return {
      dateIdx: index('date_idx').on(table.date),
      interestDateIdx: index('interest_date_idx').on(table.interestDate),
    };
  },
);
