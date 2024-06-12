import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const ordersTable = pgTable("orders", {
  id: integer("id").primaryKey(),
  client: varchar("client").notNull(),
  phone: varchar("phone").notNull(),
  status: varchar("varchar").notNull(),
  status_review: varchar("status_review").notNull(),
  date: timestamp("date").notNull(),
});

export type InsertOrder = typeof ordersTable.$inferInsert;
export type SelectOrder = typeof ordersTable.$inferSelect;
