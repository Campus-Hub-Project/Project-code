'use server'

import { prisma } from "../db"

export const findEventsCreatedByInstituitionId = async (id: string) => {
    const events = await prisma.event.findMany({
        where: { userId: id },
    })

    return events
}

interface Event {
        name: string,
        description: string,
        type: string,
        format: string,
        starts: Date,
        ends: Date,
        subs_starts: Date,
        subs_ends: Date,
        participantsLimit: number,
        userId: string
}

export const insertNewInstituitionEvent = async (
    {
        name,
        description,
        type,
        format,
        starts,
        ends,
        subs_starts,
        subs_ends,
        participantsLimit,
        userId
    }: Event
) => {
    const event = await prisma.event.create({
        data: { name, description, type, format, starts, ends, subs_starts, subs_ends, participants_limit: participantsLimit, userId }
    })

    return event
}
