"use server";
import db from "@/db/drizzle"
import { getCoursesById, getUserProgress } from "@/db/queries"
import { userProgress } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const upsertUserProgress = async (courseId:number) => {
    const {userId} = await auth()
    const user = await currentUser()

    if(!userId || !user){
        throw new Error("Unauthorized")
    }

    const course = await getCoursesById(courseId)

    if(!course){
        throw new Error("Course not found")
    }
    
    const existingUserProgress = await getUserProgress()

    if(existingUserProgress){
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/avatar.png"
        })

        revalidatePath("/courses")
        revalidatePath("/learn")
        redirect("/learn")
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/avatar.png"
    })

    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
}