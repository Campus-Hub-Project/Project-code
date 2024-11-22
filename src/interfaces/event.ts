import { EventFormat, EventType } from "@prisma/client";

export interface EventGoogleCalendarProps {
    name: string;
    description: string;
    starts: Date;
    ends: Date;
}

export interface EventCardProps {
    event: {
        participants: string[];
        description: string;
        id: string;
        userId: string;
        name: string;
        type: string;
        format: string;
        starts: Date;
        ends: Date;
        subs_starts: Date;
        subs_ends: Date;
        participants_limit: number;
        createdAt: Date;
        updatedAt: Date;
    },
    isDashboard?: boolean,
}[]

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