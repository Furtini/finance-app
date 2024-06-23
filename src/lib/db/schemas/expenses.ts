'server-only';

import { InferSelectModel, relations } from 'drizzle-orm';
import {
  date,
  index,
  integer,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { z } from 'zod';

export const categories = pgEnum('categories', [
  'needs',
  'leisure',
  'travels',
  'house',
  'education',
  'free',
]);

const categoriesSchema = z.enum(categories.enumValues);
export type Categories = z.infer<typeof categoriesSchema>;

export const expenses = pgTable(
  'expenses',
  {
    id: serial('id').primaryKey(),
    date: date('date').notNull(),
    interestDate: date('interestDate').notNull(),
    expense: varchar('expense', { length: 400 }).notNull(),

    category: categories('category').notNull(),

    amount: numeric('amount').notNull(),
    place: varchar('place', { length: 255 }).notNull(),
    note: text('note'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt')
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => {
    return {
      dateIdx: index('date_idx').on(t.date),
      interestDateIdx: index('interest_date_idx').on(t.interestDate),
    };
  },
);

export type Expense = InferSelectModel<typeof expenses>;

export const expenseRelations = relations(expenses, ({ many }) => ({
  tags: many(expenseTags),
}));

export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  name: varchar('tag', { length: 15 }).notNull().unique(),
});

export type Tag = InferSelectModel<typeof tags>;

export const tagsRelations = relations(tags, ({ many }) => ({
  tags: many(expenseTags),
}));

export const expenseTags = pgTable(
  'expense_tags',
  {
    tagId: integer('tagId')
      .notNull()
      .references(() => tags.id),
    expenseId: integer('expenseId')
      .notNull()
      .references(() => expenses.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.tagId, t.expenseId] }),
  }),
);

export const expenseTagsRelation = relations(expenseTags, ({ one }) => ({
  tag: one(tags, {
    fields: [expenseTags.tagId],
    references: [tags.id],
  }),
  expense: one(expenses, {
    fields: [expenseTags.expenseId],
    references: [expenses.id],
  }),
}));
