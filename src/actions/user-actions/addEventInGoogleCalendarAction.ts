'use server'
import { EventGoogleCalendarProps } from "@/src/interfaces/event"

import { getUserSession } from "./getUserSession"
import { createGoogleCalendar } from "./createGoogleCalendar"

export const addEventInGoogleCalendarAction = async ({ event: { name, description, starts, ends } }: { event: EventGoogleCalendarProps }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    const calendar = await createGoogleCalendar(session.accessToken)
    console.log(session);
    
    // TENTO INSERIR O EVENTO NA AGENDA E RETORNÁ-LO:
    try {
        const eventToInsert = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: {
                summary: name,
                description: description,
                start: {
                    dateTime: starts.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
                end: {
                    dateTime: ends.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
                attendees: [{ email: session.user.email }],
                reminders: {
                    useDefault: false,
                    overrides: [
                        { method: 'email', minutes: 24 * 60 },
                        { method: 'email', minutes: 10 },
                    ],
                },
            }
        })
        const eventId = eventToInsert.data.id
        return eventId
    } catch (error) {
        console.error("Erro ao tentar adicionar evento a agenda", error)
    }
}