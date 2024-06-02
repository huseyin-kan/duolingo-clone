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
        await db.delete(schema.userSubscription)

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
            {
                id:3,
                unitId:1,//Leran the basics of spanish
                order:3,
                title:"Verbs-2"
            },
            {
                id:4,
                unitId:1,//Leran the basics of spanish
                order:4,
                title:"Verbs-3"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,//Nouns
                type:"SELECT",
                order:1,
                question:'Which one of these is "the man" ?'
            },
            {
                id:2,
                lessonId:1,//Nouns
                type:"ASSIST",
                order:2,
                question:'"the man"'
            },
            {
                id:3,
                lessonId:1,//Nouns
                type:"SELECT",
                order:2,
                question:'Which one of these is "the woman" ?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:1,//Which one of thes is the man
                imageSrc:"/man.png",
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:1,//Which one of thes is the man
                imageSrc:"/woman.png",
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                challengeId:1,//Which one of thes is the man
                imageSrc:"/robot.png",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:2,//Which one of thes is the man
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:2,//Which one of thes is the man
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                challengeId:2,//Which one of thes is the man
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
        ])
        await db.insert(schema.challengeOptions).values([
            {
                challengeId:3,//Which one of thes is the man
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:3,//Which one of thes is the man
                imageSrc:"/woman.png",
                correct:true,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                challengeId:3,//Which one of thes is the man
                imageSrc:"/robot.png",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:4,
                lessonId:2,//Verbs
                type:"SELECT",
                order:1,
                question:'Which one of these is “the boy”?'
            },
            {
                id:5,
                lessonId:2,//Verbs
                type:"ASSIST",
                order:2,
                question:'"the woman"'
            },
            {
                id:6,
                lessonId:2,//Verbs
                type:"SELECT",
                order:3,
                question:'Which one of these is “the girl”?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:4,//Which one of thes is the boy
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:4,//Which one of thes is the boy
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:4,//Which one of thes is the boy
                imageSrc:"/boy.png",
                correct:true,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:5,//the woman
                correct:true,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                challengeId:5,///the woman
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:5,//the woman
                correct:false,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:6,//Which one of thes is the girl
                imageSrc:"/zombie.png",
                correct:false,
                text:"el zombie",
                audioSrc:"/es_zombie.mp3"
            },
            {
                challengeId:6,//Which one of thes is the girl
                imageSrc:"/girl.png",
                correct:true,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:6,//Which one of thes is the girl
                imageSrc:"/boy.png",
                correct:false,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])


        await db.insert(schema.challenges).values([
            {
                id:7,
                lessonId:3,//Verbs
                type:"SELECT",
                order:1,
                question:'Which one of these is “the boy”?'
            },
            {
                id:8,
                lessonId:3,//Verbs
                type:"ASSIST",
                order:2,
                question:'"the woman"'
            },
            {
                id:9,
                lessonId:3,//Verbs
                type:"SELECT",
                order:3,
                question:'Which one of these is “the girl”?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:7,//Which one of thes is the boy
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:7,//Which one of thes is the boy
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:7,//Which one of thes is the boy
                imageSrc:"/boy.png",
                correct:true,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        console.log("Seeding finished");

    } catch (error) {
        console.log(error);
        throw new Error("Failed to seed database")
    }
}

main()