'use server'

import { addParticipantToEvent, findUniqueEventById, updateGcEvendID } from "@/src/lib/queries/event"
import { addEventInGoogleCalendarAction } from "./addEventInGoogleCalendarAction"
import { getUserSession } from "./getUserSession"

export const participateInEventAction = async (eventId: string) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const doesEventExists = await findUniqueEventById(eventId)

    if (!doesEventExists) return null

    await addParticipantToEvent(eventId, session.user.id as string)

    try {
        const gcEventID = await addEventInGoogleCalendarAction({
            event: {
                name: doesEventExists.name, description: doesEventExists.description, starts: doesEventExists.starts, ends: doesEventExists.ends
            }
        })
        await updateGcEvendID(doesEventExists.id, gcEventID as string)
        if (gcEventID) return doesEventExists
    } catch (error) {
        console.error('Não foi possível adicionar esse evento à agenda do usuário', error)
    }
}