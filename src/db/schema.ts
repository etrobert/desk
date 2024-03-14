import {
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email'),
});

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  userId: serial('user_id')
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Task = typeof tasks.$inferSelect;

export const dependencies = pgTable(
  'dependencies',
  {
    taskId: serial('task_id').references(() => tasks.id),
    dependencyId: serial('dependency_id').references(() => tasks.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.taskId, table.dependencyId] }),
  }),
);

export type Dependency = typeof dependencies.$inferSelect;
