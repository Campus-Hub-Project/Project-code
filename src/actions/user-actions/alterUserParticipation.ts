'use server'

import { getUserSession } from '@/src/actions/auth-action'
import { addParticipantToEvent, findUniqueEventById, removeAttendee, updateGcEvendID } from "@/src/lib/queries/event"

import { addEventInGoogleCalendar } from "../calendar-action"

const insertUserInEvent = async ({ eventID }: { eventID: string }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const doesEventExists = await findUniqueEventById(eventID)
    if (!doesEventExists) return null


    await addParticipantToEvent(eventID, session.user.id as string)

    try {
        const gcEventID = await addEventInGoogleCalendar(
            { event: doesEventExists, accessToken: session.accessToken, email: session.user.email as string })

        await updateGcEvendID(doesEventExists.id, gcEventID as string)
        if (gcEventID) return doesEventExists
    } catch (error) {
        console.error('Não foi possível adicionar esse evento à agenda do usuário', error)
    }
}


const removeStudentFromEvent = async ({ eventID }: { eventID: string }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const doesEventExists = await findUniqueEventById(eventID)

    if (!doesEventExists) return null

    await removeAttendee(doesEventExists.id, session.user.id as string)
}

export { insertUserInEvent, removeStudentFromEvent }