import { useAuth } from "@clerk/nextjs"

export const isAdmin = async() => {
    const {userId} = await useAuth()
}