'use server'

import { EventType, EventFormat } from "@prisma/client"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { EventToFormatComplexData, EventToShowOnCard } from '@/src/interfaces/event'

const turnComplexEventDataIntoSimpleOne = async ({ complexEvents }: { complexEvents: EventToFormatComplexData[] }) => {
    let events: EventToShowOnCard[] = [];
    for (const event of complexEvents) {
        const formattedEvent: EventToShowOnCard = {
            summary: event.summary,
            description: event.description,
            type: formatTypeToCard(event.type),
            format: formatFormatToCard(event.format),
            dayStarts: formatDateTimeToCard(event.dayStarts),
            dayEnds: formatDateTimeToCard(event.dayEnds),
            subsDayStarts: formatDateTimeToCard(event.subsDayStarts),
            subsDayEnds: formatDateTimeToCard(event.subsDayEnds),
            attendeesLimit: formatAttendeesToCard(event.attendeesLimit),
            atendees: event.atendees
        };
        events.push(formattedEvent);
    }

    return events
}

export { turnComplexEventDataIntoSimpleOne }

const formatTypeToCard = (type: EventType): string => {
    switch (type) {
        case 'LECTURE': return 'Palestra'
        case 'WORKSHOP': return 'Workshop'
        case 'BOOTCAMP': return 'Bootcamp'
        case 'CONFERENCE': return 'Conferência'
        case 'CONGRESS': return 'Congresso'
        default: return 'Outro'
    }
}

const formatFormatToCard = (format: EventFormat): string => {
    switch (format) {
        case 'INPERSON': return 'Presencial'
        case 'ONLINE': return 'Online'
        case 'HYBRID': return 'Híbrido'
        default: return 'Outro'
    }
}

const formatDateTimeToCard = (date: Date): string => format(date, 'dd/MM/yyyy HH:mm', { locale: ptBR })

const formatAttendeesToCard = (attendeesLimit: number): number | 'vagas ilimitadas' => attendeesLimit === 0 ? 'vagas ilimitadas' : attendeesLimit

