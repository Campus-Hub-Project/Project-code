'use server'

import { auth } from "@/src/auth"
import { addParticipantToEvent, findUniqueEventById } from "@/src/lib/queries/event"
import { findUniqueUserById } from "@/src/lib/queries/user"
import { addEventInGoogleCalendarAction } from "./addEventInGoogleCalendarAction"

export const participateInEventAction = async (eventId: string) => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role !== 'USER') return null

    const doesEventExists = await findUniqueEventById(eventId)

    if (!doesEventExists) return null

    const event = await addParticipantToEvent(eventId, doesUserExists.id)

    try {
        await addEventInGoogleCalendarAction({ event })
        return event
    } catch (error) {
        console.error('Não foi possível adicionar esse evento à agenda do usuário', error)
    }
}