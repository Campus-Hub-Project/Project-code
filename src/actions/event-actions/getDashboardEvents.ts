'use server'

import { findEventsCreatedWhereInstituitionID } from "@/src/lib/queries/event"
import { getUserSession } from "../user-actions/getUserSession"
import { UserRole } from "@prisma/client"
import { EventToFormatComplexData, EventToShowOnCard } from "@/src/interfaces/event"
import { EventType, EventFormat } from "@prisma/client"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const getDashboardEvents = async ({ role }: { role: UserRole }) => {
    const session = await getUserSession(role)
    if (!session) return null

    let complexEvents: EventToFormatComplexData[] = []
    if (role === UserRole.INSTITUITION) complexEvents = await findEventsCreatedWhereInstituitionID(session.user.id as string)
    // if (role === UserRole.USER) events = await findEventsCreatedWhereInstituitionID(session.user.id as string)


    // 1- MELHORAR A FORMATAÇÃO DAS DATAS
    // 2- BUSCAR OS EVENTOS QUE O USUÁRIO PARTICIPA
    let events: EventToShowOnCard[] = [];
    for (const event of complexEvents) {
        const formattedEvent: EventToShowOnCard = {
            summary: event.summary,
            description: event.description,
            type: eventTypeFormatter(event.type),
            format: eventFormatFormatter(event.format),
            dayStarts: eventDateTimeFormatter(event.dayStarts),
            dayEnds: eventDateTimeFormatter(event.dayEnds),
            subsDayStarts: eventDateTimeFormatter(event.subsDayStarts),
            subsDayEnds: eventDateTimeFormatter(event.subsDayEnds),
            attendeesLimit: eventAttendeesLimit(event.attendeesLimit),
            atendees: event.atendees
        };
        events.push(formattedEvent);
    }

    return events
}

const eventTypeFormatter = (type: EventType): string => {
    switch (type) {
        case 'LECTURE': return 'Palestra'
        case 'WORKSHOP': return 'Workshop'
        case 'BOOTCAMP': return 'Bootcamp'
        case 'CONFERENCE': return 'Conferência'
        case 'CONGRESS': return 'Congresso'
        default: return 'Outro'
    }
}

const eventFormatFormatter = (format: EventFormat): string => {
    switch (format) {
        case 'INPERSON': return 'Presencial'
        case 'ONLINE': return 'Online'
        case 'HYBRID': return 'Híbrido'
        default: return 'Outro'
    }
}

const eventDateTimeFormatter = (date: Date): string => format(date, 'dd/MM/yyyy HH:mm', { locale: ptBR })

const eventAttendeesLimit = (attendeesLimit: number): number | 'vagas ilimitadas' => attendeesLimit === 0 ? 'vagas ilimitadas' : attendeesLimit