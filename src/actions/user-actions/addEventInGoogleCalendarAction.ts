'use server'

import { auth } from "@/src/auth"
import { EventGoogleCalendarProps } from "@/src/interfaces/event"
import { findUniqueUserById } from "@/src/lib/queries/user"
import { google } from "googleapis"

export const addEventInGoogleCalendarAction = async ({ event }: { event: EventGoogleCalendarProps }) => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role !== 'USER') return null

    // CRIO UMA INSTANCIA DE CLIENTE OAUTH2 PARA FAZER A REQUISÇÃO A API DO GOOGLE CALENDAR:
    const authClient = new google.auth.OAuth2()

    // DEFINO AS CREDENCIAIS DE AUTENTICAÇÃO
    authClient.setCredentials({ access_token: session.accessToken })

    // CRIO UMA INSTANCIA DO GOOGLE CALENDAR E PASSO AS CREDENCIAIS DE AUTENTICAÇÃO:
    const calendar = google.calendar({ version: 'v3', auth: authClient })

    // TENTO INSERIR O EVENTO NA AGENDA E RETORNÁ-LO:
    try {
        const eventToInsert = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: {
                summary: event.name,
                description: event.description,
                start: {
                    dateTime: event.starts.toISOString(),
                    timeZone: 'America/Sao_Paulo',
                },
                end: {
                    dateTime: event.ends.toISOString(),
                    timeZone: 'America/Sao_Paulo',
                },
                attendees: [{ email: doesUserExists.email }],
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