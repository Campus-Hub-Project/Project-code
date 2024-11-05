'use server'
import { EventGoogleCalendarProps } from "@/src/interfaces/event"
import { google } from "googleapis"

import { getUserSession } from "./getUserSession"

export const addEventInGoogleCalendarAction = async ({ event: { name, description, starts, ends } }: { event: EventGoogleCalendarProps }) => {
    const session = await getUserSession('USER')
    if (!session) return null

    // CRIO UMA INSTANCIA DE CLIENTE OAUTH2 PARA FAZER A REQUISÇÃO A API DO GOOGLE CALENDAR:
    const authClient = new google.auth.OAuth2()
    // DEFINO AS CREDENCIAIS DE AUTENTICAÇÃO
    authClient.setCredentials({ access_token: session.accessToken })
    // CRIO UMA INSTANCIA DO GOOGLE CALENDAR E PASSO AS CREDENCIAIS DE AUTENTICAÇÃO:
    const calendar = google.calendar({ version: 'v3', auth: authClient })

    // TENTO INSERIR O EVENTO NA AGENDA E RETORNÁ-LO:
    try {
        const eventToInsert = calendar.events.insert({
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
        return eventToInsert
    } catch (error) {
        console.error("Erro ao tentar adicionar evento a agenda", error)
    }
}