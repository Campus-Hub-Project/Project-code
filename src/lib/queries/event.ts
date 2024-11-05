'use server'

import { prisma } from "../db"


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

export const findUniqueEventById = async (id: string) => {
    const event = await prisma.event.findUnique({
        where: { id }
    })

    return event
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

export const findEventsCreatedByInstituitionId = async (id: string) => {
    const events = await prisma.event.findMany({
        where: { userId: id },
        include: {
            participants: {
                select: {
                    user: { select: { id: true } },
                },
            },
        },
    })

    return events.map(event => ({
        ...event,
        participants: event.participants.map(part => part.user.id),
    }));
}

export const findEventsWhereUserIsParticipating = async (id: string) => {
    const events = await prisma.event.findMany({
        where: {
            participants: {
                some: { userId: id },
            },
        },
        include: {
            participants: {
                select: {
                    user: { select: { id: true } },
                },
            },
        },
    });

    return events.map(event => ({
        ...event,
        participants: event.participants.map(part => part.user.id),
    }))
}


export const findAllEventsFromPlataform = async () => {
    const events = await prisma.event.findMany({
        include: {
            participants: {
                select: {
                    user: { select: { id: true } },
                },
            },
        },
    });

    return events.map(event => ({
        ...event,
        participants: event.participants.map(part => part.user.id),
    }));
}


export const addParticipantToEvent = async (eventId: string, userId: string) => {
    const participant = await prisma.userEvent.create({
        data: { userId, eventId }
    })

    return participant
}


export const removeParticipantFromEvent = async (eventId: string, userId: string) => {
    await prisma.userEvent.delete({
        where: {
            userId_eventId: {
                userId: userId,
                eventId: eventId
            },
        },
    })
}
