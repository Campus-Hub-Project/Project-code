'use server'

import { getUserSession } from '@/src/actions/auth-action'
import { addParticipantToEvent, findUniqueEventById, removeAttendee, updateGcEvendID } from "@/src/lib/queries/event"

import { addEventInGoogleCalendar, removeEventFromGoogleCalendar } from "./calendar-action"
import { RegularEventData } from '../interfaces/event'

const addStudentParticipation = async ({ eventID }: { eventID: string }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const doesEventExist: RegularEventData | null = await findUniqueEventById(eventID)
    if (!doesEventExist) return null

    try {
        await addParticipantToEvent(eventID, session.user.id as string)
        const gcEventID = await addEventInGoogleCalendar(
            { event: doesEventExist, accessToken: session.accessToken, email: session.user.email as string })
        if (!gcEventID) return null

        await updateGcEvendID(doesEventExist.id, gcEventID as string)
        return doesEventExist
    } catch (error) {
        console.error('Não foi possível adicionar esse evento à agenda do usuário', error)
    }
}

const removeStudentParticipation = async ({ eventID }: { eventID: string }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const doesEventExists = await findUniqueEventById(eventID)
    if (!doesEventExists) return null

    try {
        await removeAttendee(doesEventExists.id, session.user.id as string)
        await removeEventFromGoogleCalendar(
            { eventID: doesEventExists.id, accessToken: session.accessToken })

        await updateGcEvendID(doesEventExists.id, doesEventExists.googleEventId as string)
    } catch (error) {
        console.error('Não foi possível adicionar esse evento à agenda do usuário', error)
    }
}

export { addStudentParticipation, removeStudentParticipation }