'use server'

import { google } from 'googleapis'
import { Session } from 'next-auth'

interface Props {
    event: {
        name: string,
        description: string,
        type: string,
        format: string,
        starts: Date,
        ends: Date,
        subs_starts: Date,
        subs_ends: Date,
        price: number,
        participants_limit: number,
    },
    session: Session
}

const addInGoogleCalendar = async ({ event, session }: Props) => {
    // crio uma instancia de cliente OAuth2 para fazer a requisição à api do Google Calendar
    const authClient = new google.auth.OAuth2()

    // defino as credenciais de autenticação para o provedor usando o access token
    authClient.setCredentials({ access_token: session.accessToken })

    // crio uma instância do google calendar e passando a versão e as credenciais de autenticação
    const calendar = google.calendar({ version: 'v3', auth: authClient })

    // converto as datas dos eventos para o formato aceito pelo Google Calendar
    // const eventStarts = new Date(event.eventDayFrom).toISOString()
    // const eventEnds = new Date(event.eventDayTo).toISOString()

    // tento inserir o evento no Google Calendar e retorná-lo
    try {
        const insertedEvent = calendar.events.insert({
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
                attendees: [{ email: session.user!.email }]
            }
        })
        
        return insertedEvent
    } catch (error) {
        console.error("Erro ao tentar adicionar evento a agenda", error)
    }

}

export default addInGoogleCalendar
