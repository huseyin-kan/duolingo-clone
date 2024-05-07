import {cache} from "react"
import db from "./drizzle"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { courses, units, userProgress } from "./schema"


export const getCourses = cache(async () =>{
    const data  = await db.query.courses.findMany()
    
    return data
})

export const getUserProgress =  cache(async () =>{
    const {userId} = await auth()

    if(!userId){
        return null
    }

    const data = await db.query.userProgress.findFirst({
        where:eq(userProgress.userId, userId),
        with:{activeCourse:true}
    })

    return data
})

export const getCoursesById = cache(async (courseId:number) => {
    const data  = await db.query.courses.findFirst({
        where:eq(courses.id, courseId)
    })
    return data
})

export const getUnits = cache(async() => {
    const userProgress = await getUserProgress()

    if(!userProgress?.activeCourseId ){
        return []
    }

    const data  = await db.query.units.findMany({
        where:eq(units.id, userProgress.activeCourseId),
        with:{
            lessons:{
                with:{
                    challenges:{
                        with:{
                            challengeProgress:true
                        }
                    }
                }
            }
        }
    })

    const normalizedData = data.map((unit) =>{
        const lessonWithCompletedStatus = unit.lessons.map((lesson) => {
            const allCompletedChallenges = lesson.challenges.every((challenge) => {
                return challenge.challengeProgress && challenge.challengeProgress.length > 0 
                && challenge.challengeProgress.every((progress) => progress.completed)
            })

            return {...lesson,complete:allCompletedChallenges}
        })

        return {...unit,lessons:lessonWithCompletedStatus}
    })
    return normalizedData
})