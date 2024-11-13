'use server'

import { getUserSession } from "./getUserSession"
import { createGoogleCalendar } from "./createGoogleCalendar"

export const addEventInGoogleCalendarAction = async ({ eventId }: { eventId: string }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const calendar = await createGoogleCalendar(session.accessToken)

    try {
        const eventToInsert = calendar.events.delete({
            calendarId: 'primary',
            eventId: eventId
        })
        return eventToInsert
    } catch (error) {
        console.error("Erro ao tentar adicionar evento a agenda", error)
    }
}