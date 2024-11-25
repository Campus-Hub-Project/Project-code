'use server'

import { EventType, EventFormat } from "@prisma/client"
import { format } from 'date-fns'

import { EventToFormatComplexData, EventToShowOnCard } from '@/src/interfaces/event'

const turnComplexEventDataIntoSimpleOne = async ({ complexEvents }: { complexEvents: EventToFormatComplexData[] }) => {
    let events: EventToShowOnCard[] = []
    
    complexEvents.forEach(event => {
        const formattedEvent: EventToShowOnCard = {
            id: event.id,
            summary: event.summary,
            description: event.description,
            type: formatTypeToCard(event.type),
            format: formatFormatToCard(event.format),
            dayStarts: formatDayStartsToCard(event.dayStarts),
            dayEnds: formatDayEndsToCard(event.dayEnds),
            subsDayStarts: formatDateToCard(event.subsDayStarts),
            subsDayEnds: formatDateToCard(event.subsDayEnds),
            attendeesLimit: formatAttendeesLimitToCard(event.attendeesLimit),
            atendees: event.atendees.length
        }
        events.push(formattedEvent)
    })

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

const formatDayStartsToCard = (date: Date): string => format(date, 'dd/MM/yyyy HH:mm')

const formatDayEndsToCard = (date: Date): string => format(date, 'HH:mm')

const formatDateToCard = (date: Date): string => format(date, 'dd/MM/yyyy')

const formatAttendeesLimitToCard = (attendeesLimit: number): number | 'vagas ilimitadas' =>
    attendeesLimit === 0 ? 'vagas ilimitadas' : attendeesLimit
