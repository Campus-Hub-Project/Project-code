import { EventFormat, EventType } from "@prisma/client";

export interface AddEventInGoogleCalendar {
    summary: string;
    description: string;
    dayStarts: Date;
    dayEnds: Date;
}

export interface EventToInsert {
    summary: string,
    description: string,
    type: EventType,
    format: EventFormat,
    dayStarts: Date,
    dayEnds: Date,
    subsDayStarts: Date,
    subsDayEnds: Date,
    attendeesLimit: number,
    userId: string,
}

export interface EventToFormatComplexData {
    summary: string,
    description: string,
    type: EventType,
    format: EventFormat,
    dayStarts: Date,
    dayEnds: Date,
    subsDayStarts: Date,
    subsDayEnds: Date,
    attendeesLimit: number,
    atendees: {
        user: {
            id: string
        }
    }[]
}

export interface EventToShowOnCard {
    summary: string,
    description: string,
    type: string,
    format: string,
    dayStarts: string,
    dayEnds: string,
    subsDayStarts: string,
    subsDayEnds: string,
    attendeesLimit: number | 'vagas ilimitadas',
    atendees: {
        user: {
            id: string
        }
    }[]
}