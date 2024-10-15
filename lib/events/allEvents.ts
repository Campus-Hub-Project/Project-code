'use server'

import { auth } from "../auth/auth"
import { prisma } from "../db"

export const allEventsCreated = async () => {
    const session = await auth()

    if (!session || !session.user) return null

    const allEvents = await prisma.event.findMany()

    return allEvents
}
