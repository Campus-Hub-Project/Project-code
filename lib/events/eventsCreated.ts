'use server'
import { auth } from "../auth/auth"
import { prisma } from "../db"

export const getEventsCreated = async () => {
    const session = await auth()

    if (!session || !session.user) return null

    const eventsCreated = await prisma.event.findMany({
        where: {
            userId: session.user.id,
        }
    })

    return eventsCreated
}
