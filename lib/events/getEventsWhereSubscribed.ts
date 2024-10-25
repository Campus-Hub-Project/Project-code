'use server'

import { auth } from "../auth/auth"
import { prisma } from "../db"

export const getEventsWhereSubscribed = async () => {
    const session = await auth()

    if (!session || !session.user) return null

    const events = await prisma.event.findMany({
        where: {
            participants: {
                some: {
                    id: session.user.id,
                }
            }
        },
        include: {
            participants: true
        }
    })

    return events
}