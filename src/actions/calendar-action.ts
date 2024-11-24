'use server'

import { google } from "googleapis"

import { AddEventInGoogleCalendar } from "../interfaces/event"


const addEventInGoogleCalendar = async ({ event, accessToken, email }: { event: AddEventInGoogleCalendar, accessToken: string, email: string }) => {
    const calendar = await createGoogleCalendar(accessToken)

    // TENTO INSERIR O EVENTO NA AGENDA E RETORNÁ-LO:
    try {
        const eventToInsert = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: {
                summary: event.summary,
                description: event.description,
                start: {
                    dateTime: event.dayStarts.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
                end: {
                    dateTime: event.dayEnds.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
                attendees: [{ email }],
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

const removeEventFromGoogleCalendar = async ({ eventID, accessToken }: { eventID: string, accessToken: string }) => {
    const calendar = await createGoogleCalendar(accessToken)

    try {
        calendar.events.delete({
            calendarId: 'primary',
            eventId: eventID
        })
    } catch (error) {
        console.error("Erro ao tentar remover evento a agenda", error)
    }
}

export { addEventInGoogleCalendar, removeEventFromGoogleCalendar }

export const createGoogleCalendar = async (accessToken: string) => {
    // CRIO UMA INSTANCIA DE CLIENTE OAUTH2 PARA FAZER A REQUISÇÃO A API DO GOOGLE CALENDAR:
    const authClient = new google.auth.OAuth2()

    // DEFINO AS CREDENCIAIS DE AUTENTICAÇÃO
    authClient.setCredentials({ access_token: accessToken })

    // CRIO UMA INSTANCIA DO GOOGLE CALENDAR E PASSO AS CREDENCIAIS DE AUTENTICAÇÃO:
    const calendar = google.calendar({ version: 'v3', auth: authClient })

    return calendar
}