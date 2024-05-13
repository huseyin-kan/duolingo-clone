import "dotenv/config"

import * as schema from "../db/schema"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql,{schema})

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeProgress)

        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Spanish",
                imageSrc:"/es.svg"
            },
            {
                id:2,
                title:"French",
                imageSrc:"/fr.svg"
            },
            {
                id:3,
                title:"Italian",
                imageSrc:"/it.svg"
            },
            {
                id:4,
                title:"Croatian",
                imageSrc:"/hr.svg"
            },
        ])

        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1,//Spanish
                title:"Unit 1",
                description:"Learn the basics of Spanish",
                order:1
            },
        ])

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1,//Leran the basics of spanish
                order:1,
                title:"Nouns"
            },
            {
                id:2,
                unitId:1,//Leran the basics of spanish
                order:2,
                title:"Verbs"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,//Nouns
                type:"SELECT",
                order:1,
                question:'Which one of these is "the man" ?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id:1,
                challengeId:1,//Which one of thes is the man
                imageSrc:"/man.png",
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.svg"
            },
            {
                id:2,
                challengeId:1,//Which one of thes is the man
                imageSrc:"/woman.png",
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.svg"
            },
            {
                id:3,
                challengeId:1,//Which one of thes is the man
                imageSrc:"/robot.png",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.svg"
            },
        ])

        console.log("Seeding finished");

    } catch (error) {
        console.log(error);
        throw new Error("Failed to seed database")
    }
}

main()