'use server'

import { auth } from "@/src/auth"
import { findUniqueEventById, removeParticipantFromEvent } from "@/src/lib/queries/event"
import { findUniqueUserById } from "@/src/lib/queries/user"

export const removeUserFromEventAction = async (eventId: string) => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role !== 'USER') return null

    const doesEventExists = await findUniqueEventById(eventId)

    if (!doesEventExists) return null
    
    await removeParticipantFromEvent(eventId, doesEventExists.id)
}