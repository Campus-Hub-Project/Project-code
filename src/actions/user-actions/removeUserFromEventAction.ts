'use server'

import { findUniqueEventById, removeParticipantFromEvent } from "@/src/lib/queries/event"

import { getUserSession } from "./getUserSession"

export const removeUserFromEventAction = async (eventId: string) => {
    const session = await getUserSession('USER')

    if (!session) return null

    const doesEventExists = await findUniqueEventById(eventId)

    if (!doesEventExists) return null
    
    const event = await removeParticipantFromEvent(doesEventExists.id, session.user.id as string)
    
    return event
}