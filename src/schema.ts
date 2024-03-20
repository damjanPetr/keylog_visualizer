import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const keys = sqliteTable("key_log", {
  time_utc: integer("time_utc").notNull(),
  key_code: text("key_code").notNull(),
});
export { keys };
