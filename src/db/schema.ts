import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const User = pgTable('User', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  // todoList
});
