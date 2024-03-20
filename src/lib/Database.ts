import { drizzle } from "drizzle-orm/better-sqlite3";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import Database from "better-sqlite3";

import { keys } from "@/schema";

const sqlite = new Database(process.env.DATABASE_URL);

export const db = drizzle(sqlite);
