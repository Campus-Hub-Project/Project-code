'use server'
import { google } from 'googleapis'
import { User } from 'next-auth'

interface Props {
    event: {
        name: string,
        description: string,
        eventType: string,
        eventFormat: string,
        eventDayTo: Date,
        eventDayFrom: Date,
        applicationPeriodTo: Date,
        applicationPeriodFrom: Date,
        eventTime: string,
        eventValue: number,
        eventLimit: number,
    },
    session: {
        user: User,
        accessToken: string
    }
}

const addInGoogleCalendar = async ({ event, session }: Props) => {
    // criando uma instancia de cliente OAuth2 para fazer a requisição à api do Google Calendar
    const authClient = new google.auth.OAuth2()

    // definindo as credenciais de autenticação para o provedor usando o access token
    authClient.setCredentials({ access_token: session.accessToken })

    // criando uma instância do google calendar e passando a versão e as credenciais de autenticação
    const calendar = google.calendar({ version: 'v3', auth: authClient })

    // convertendo as datas dos eventos para o formato aceito pelo Google Calendar
    const eventStarts = new Date(event.eventDayFrom).toISOString()
    const eventEnds = new Date(event.eventDayTo).toISOString()

    // inserindo o evento no Google Calendar
    try {
        const insertedEvent = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: {
                summary: event.name,
                description: event.description,
                start: {
                    dateTime: eventStarts,
                    timeZone: 'America/Sao_Paulo',
                },
                end: {
                    dateTime: eventEnds,
                    timeZone: 'America/Sao_Paulo',
                },
                attendees: [{ email: session.user.email }]
            }
        })
        return insertedEvent
    } catch (error) {
        console.error("Erro ao tentar adicionar evento a agenda", error)
    }

}

export default addInGoogleCalendar
