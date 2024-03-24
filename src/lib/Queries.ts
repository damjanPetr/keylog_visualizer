import { keys } from "@/schema";
import { sql, desc } from "drizzle-orm";
import { db } from "./Database";

const frequencies = db
  .select({
    key_code: keys.key_code,
    count: sql<number>`count(*)`,
    frequency: sql<number>`count(*) * 1.0 / (SELECT count(*) FROM key_log)`,
  })
  .from(keys)
  .groupBy(keys.key_code)
  .orderBy(({ count }) => desc(count));

export { frequencies };
