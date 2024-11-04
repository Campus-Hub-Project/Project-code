'use server'

import { addParticipantToEvent, findUniqueEventById } from "@/src/lib/queries/event"
import { addEventInGoogleCalendarAction } from "./addEventInGoogleCalendarAction"
import { getUserSession } from "./getUserSession"

export const participateInEventAction = async (eventId: string) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const doesEventExists = await findUniqueEventById(eventId)

    if (!doesEventExists) return null

    const event = await addParticipantToEvent(eventId, session.user.id as string)

    try {
        const response = await addEventInGoogleCalendarAction({ event })
        if (response) return event
    } catch (error) {
        console.error('Não foi possível adicionar esse evento à agenda do usuário', error)
    }
}