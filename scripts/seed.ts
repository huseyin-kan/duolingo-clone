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
            {
                id:2,
                courseId:1,//Spanish
                title:"Unit 2",
                description:"Learn the basics of Spanish - 2",
                order:2
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
            {
                id:5,
                unitId:2,//Leran the basics of spanish
                order:5,
                title:"Nouns-2"
            },
            {
                id:6,
                unitId:2,//Leran the basics of spanish
                order:6,
                title:"Verbs-4"
            },
            {
                id:7,
                unitId:2,//Leran the basics of spanish
                order:7,
                title:"Verbs-5"
            },
            {
                id:8,
                unitId:2,//Leran the basics of spanish
                order:8,
                title:"Verbs-6"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:16,
                lessonId:5,//Nouns
                type:"SELECT",
                order:1,
                question:'Which one of these is "the apple" ?'
            },
            {
                id:17,
                lessonId:5,//Nouns
                type:"ASSIST",
                order:2,
                question:'"the apple"'
            },
            {
                id:18,
                lessonId:5,//Nouns
                type:"SELECT",
                order:2,
                question:'Which one of these is "the bread" ?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:16,//Which one of thes is the apple
                imageSrc:"/apple.svg",
                correct:true,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
            {
                challengeId:16,//Which one of thes is the apple
                imageSrc:"/bread.svg",
                correct:false,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:16,//Which one of thes is the apple
                imageSrc:"/water.svg",
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:17,//the apple
                correct:true,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
            {
                challengeId:17,//the apple
                correct:false,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:17,//the apple
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:18,//Which one of thes is the bread
                imageSrc:"/milk.svg",
                correct:false,
                text:"la leche",
                audioSrc:"/es_milk.mp3"
            },
            {
                challengeId:18,//Which one of thes is the bread
                imageSrc:"/bread.svg",
                correct:true,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:18,//Which one of thes is the bread
                imageSrc:"/water.svg",
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:19,
                lessonId:6,//Verbs-4
                type:"SELECT",
                order:1,
                question:'Which one of these is "the milk" ?'
            },
            {
                id:20,
                lessonId:6,//Verbs-4
                type:"ASSIST",
                order:2,
                question:'"the water"'
            },
            {
                id:21,
                lessonId:6,//Verbs-4
                type:"SELECT",
                order:2,
                question:'Which one of these is "the water" ?'
            }
        ])

        

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:19,//Which one of thes is the milk
                imageSrc:"/milk.svg",
                correct:true,
                text:"la leche",
                audioSrc:"/es_milk.mp3"
            },
            {
                challengeId:19,//Which one of thes is the milk
                imageSrc:"/bread.svg",
                correct:false,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:19,//Which one of thes is the milk
                imageSrc:"/water.svg",
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:20,//the water
                correct:false,
                text:"la leche",
                audioSrc:"/es_milk.mp3"
            },
            {
                challengeId:20,//the water
                correct:false,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
            {
                challengeId:20,//the water
                correct:true,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:21,//Which one of thes is the water
                imageSrc:"/apple.svg",
                correct:false,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
            {
                challengeId:21,//Which one of thes is the water
                imageSrc:"/bread.svg",
                correct:false,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:21,//Which one of thes is the water
                imageSrc:"/water.svg",
                correct:true,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        //7. lesson
        await db.insert(schema.challenges).values([
            {
                id:22,
                lessonId:7,//Verbs-5
                type:"SELECT",
                order:1,
                question:'Which one of these is "the girl" ?'
            },
            {
                id:23,
                lessonId:7,//Verbs-5
                type:"ASSIST",
                order:2,
                question:'"the bread"'
            },
            {
                id:24,
                lessonId:7,//Verbs-5
                type:"SELECT",
                order:3,
                question:'Which one of these is "the robot" ?'
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:22,//Which one of thes is the girl
                imageSrc:"/zombie.png",
                correct:false,
                text:"el zombie",
                audioSrc:"/es_zombie.mp3"
            },
            {
                challengeId:22,//Which one of thes is the girl
                imageSrc:"/robot.png",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
            {
                challengeId:22,//Which one of thes is the girl
                imageSrc:"/girl.png",
                correct:true,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:23,//the bread
                correct:true,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:23,//the bread
                correct:false,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
            {
                challengeId:23,//the bread
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:24,//Which one of thes is the robot
                imageSrc:"/zombie.png",
                correct:false,
                text:"el zombie",
                audioSrc:"/es_zombie.mp3"
            },
            {
                challengeId:24,//Which one of thes is the robot
                imageSrc:"/robot.png",
                correct:true,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
            {
                challengeId:24,//Which one of thes is the robot
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:25,
                lessonId:8,//Verbs-6
                type:"SELECT",
                order:1,
                question:'Which one of these is "the girl" ?'
            },
            {
                id:26,
                lessonId:8,//Verbs-6
                type:"ASSIST",
                order:2,
                question:'"the bread"'
            },
            {
                id:27,
                lessonId:8,//Verbs-6
                type:"SELECT",
                order:3,
                question:'Which one of these is "the robot" ?'
            },
            {
                id:28,
                lessonId:8,//Verbs-6
                type:"ASSIST",
                order:4,
                question:'"the milk"'
            },
            {
                id:29,
                lessonId:8,//Verbs-6
                type:"SELECT",
                order:5,
                question:'Which one of these is "the water" ?'
            },
            {
                id:30,
                lessonId:8,//Verbs-6
                type:"SELECT",
                order:6,
                question:'Which one of these is "the apple" ?'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:25,//Which one of thes is the girl
                imageSrc:"/zombie.png",
                correct:false,
                text:"el zombie",
                audioSrc:"/es_zombie.mp3"
            },
            {
                challengeId:25,//Which one of thes is the girl
                imageSrc:"/robot.png",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
            {
                challengeId:25,//Which one of thes is the girl
                imageSrc:"/girl.png",
                correct:true,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:26,//the bread
                correct:true,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:26,//the bread
                correct:false,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
            {
                challengeId:26,//the bread
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:27,//Which one of thes is the robot
                imageSrc:"/zombie.png",
                correct:false,
                text:"el zombie",
                audioSrc:"/es_zombie.mp3"
            },
            {
                challengeId:27,//Which one of thes is the robot
                imageSrc:"/robot.png",
                correct:true,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
            {
                challengeId:27,//Which one of thes is the robot
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:28,//the milk
                correct:false,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:28,//the milk
                correct:true,
                text:"la leche",
                audioSrc:"/es_milk.mp3"
            },
            {
                challengeId:28,//the milk
                correct:false,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:29,//Which one of thes is the water
                imageSrc:"/bread.svg",
                correct:false,
                text:"el pan",
                audioSrc:"/es_bread.mp3"
            },
            {
                challengeId:29,//Which one of thes is the water
                imageSrc:"/water.svg",
                correct:true,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
            {
                challengeId:29,//Which one of thes is the water
                imageSrc:"/apple.svg",
                correct:false,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:30,//Which one of thes is the apple
                imageSrc:"/milk.svg",
                correct:false,
                text:"la leche",
                audioSrc:"/es_milk.mp3"
            },
            {
                challengeId:30,//Which one of thes is the apple
                imageSrc:"/water.svg",
                correct:false,
                text:"el agua",
                audioSrc:"/es_water.mp3"
            },
            {
                challengeId:30,//Which one of thes is the apple
                imageSrc:"/apple.svg",
                correct:true,
                text:"la manzana",
                audioSrc:"/es_apple.mp3"
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
                order:3,
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
                challengeId:8,//the woman
                correct:true,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                challengeId:8,//the woman
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:8,//the woman
                correct:false,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:7,//Which one of thes is the girl
                imageSrc:"/man.png",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3"
            },
            {
                challengeId:7,//Which one of thes is the girl
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:7,//Which one of thes is the girl
                imageSrc:"/boy.png",
                correct:true,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:9,//Which one of thes is the boy
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:9,//Which one of thes is the boy
                imageSrc:"/girl.png",
                correct:true,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:9,//Which one of thes is the boy
                imageSrc:"/boy.png",
                correct:false,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:10,
                lessonId:4,//Verbs
                type:"SELECT",
                order:1,
                question:'Which one of these is “the boy”?'
            },
            {
                id:11,
                lessonId:4,//Verbs
                type:"ASSIST",
                order:2,
                question:'"the woman"'
            },
            {
                id:12,
                lessonId:4,//Verbs
                type:"SELECT",
                order:3,
                question:'Which one of these is “the girl”?'
            },
            {
                id:13,
                lessonId:4,//Verbs
                type:"SELECT",
                order:4,
                question:'Which one of these is “the woman”?'
            },
            {
                id:14,
                lessonId:4,//Verbs
                type:"ASSIST",
                order:5,
                question:'"the boy'
            },
            {
                id:15,
                lessonId:4,//Verbs
                type:"SELECT",
                order:6,
                question:'Which one of these is “the man”?'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:10,//Which one of thes is the boy
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:10,//Which one of thes is the boy
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:10,//Which one of thes is the boy
                imageSrc:"/boy.png",
                correct:true,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:11,//the woman
                correct:true,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
            {
                challengeId:11,//the woman
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:11,//the woman
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:12,//Which one of thes is the girl
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:12,//Which one of thes is the girl
                imageSrc:"/girl.png",
                correct:true,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:12,//Which one of thes is the girl
                imageSrc:"/boy.png",
                correct:false,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:13,//Which one of thes is the woman
                imageSrc:"/man.png",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:13,//Which one of thes is the woman
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:13,//Which one of thes is the woman
                imageSrc:"/woman.png",
                correct:true,
                text:"la mujer",
                audioSrc:"/es_woman.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId:14,// the boy
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:14,// the boy

                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:14,// the boy
                correct:true,
                text:"el nino",
                audioSrc:"/es_boy.mp3"
            },
        ])
        
        await db.insert(schema.challengeOptions).values([
            {
                challengeId:15,//Which one of thes is the man
                imageSrc:"/man.png",
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.mp3"
            },
            {
                challengeId:15,//Which one of thes is the man
                imageSrc:"/girl.png",
                correct:false,
                text:"la nina",
                audioSrc:"/es_girl.mp3"
            },
            {
                challengeId:15,//Which one of thes is the man
                imageSrc:"/boy.png",
                correct:false,
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