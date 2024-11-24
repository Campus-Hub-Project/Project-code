'use server'

import { EventToInsert } from "@/src/interfaces/event"
import { prisma } from "../db"

export const findUniqueEventById = async (id: string) => {
    const event = await prisma.event.findUnique({
        where: { id }
    })

    return event
}

export const createNewEvent = async ({ event }: { event: EventToInsert }) => {
    return await prisma.event.create({
        data: {
            summary: event.summary,
            description: event.description,
            type: event.type,
            format: event.format,
            dayStarts: event.dayStarts,
            dayEnds: event.dayEnds,
            subsDayStarts: event.subsDayStarts,
            subsDayEnds: event.subsDayEnds,
            attendeesLimit: event.attendeesLimit,
            userId: event.userId,
        }
    })
}

export const findEventsCreatedWhereInstituitionID = async (id: string) => {
    const events = await prisma.event.findMany({
        where: { userId: id },
        include: {
            atendees: {
                select: {
                    user: { select: { id: true } }
                }
            }
        }
    })
    return events
}

export const findEventsWhereUserIDIsAttendee = async (id: string) => {
    const events = await prisma.event.findMany({
        where: {
            atendees: { some: { userId: id } },
        },
        include: {
            atendees: {
                select: {
                    user: { select: { id: true } },
                },
            },
        },
    })
    return events
}



export const findAllEventsFromPlataform = async () => {
    const events = await prisma.event.findMany({
        include: {
            atendees: {
                select: {
                    user: { select: { id: true } },
                },
            },
        },
    });

    return events.map(event => ({
        ...event,
        attendees: event.atendees.map(part => part.user.id),
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

export const updateGcEvendID = async (eventId: string, gcEventID: string) => {
    await prisma.event.update({
        where: { id: eventId },
        data: { googleEventId: gcEventID },
    })
}