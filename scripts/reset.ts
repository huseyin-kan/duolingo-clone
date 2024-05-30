import "dotenv/config"

import * as schema from "../db/schema"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql,{schema})

const main = async () => {
    try {
        console.log("Reseting database");

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeProgress)
        await db.delete(schema.userSubscription)
    } catch (error) {
        console.log(error);
        throw new Error("Failed to reset database")
    }
}

main()