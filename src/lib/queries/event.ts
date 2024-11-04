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
                select: { id: true },
            }
        },
    })
    return events
}

export const findEventsWhereUserIsParticipating = async (id: string) => {
    const events = await prisma.event.findMany({
        where: {
            participants: {
                some: { id },
            },
        },
        include: {
            participants: {
                select: { id: true }
            }
        }
    });

    return events;
}

export const findAllEventsFromPlataform = async () => {
    const events = await prisma.event.findMany({
        include: {
            participants: {
                select: { id: true },
            }
        },
    })
    return events
}

export const addParticipantToEvent = async (eventId: string, userId: string) => {
    const event = await prisma.event.update({
        where: { id: eventId },
        data: {
            participants: {
                connect: { id: userId },
            }
        }
    })
    return event
}

export const removeParticipantFromEvent = async (eventId: string, userId: string) => {
    const event = await prisma.event.update({
        where: { id: eventId },
        data: {
            participants: {
                delete: { id: userId },
            }
        }
    })
    return event
}