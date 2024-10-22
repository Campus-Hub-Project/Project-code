'use server'

import { prisma } from "@/lib/db"

export const getAllEventsFromPlataform = async () => {
    const events = await prisma.event.findMany()
    return events
}

export const getAllEventsFromInstituition = async (userId: string) => {
    const events = await prisma.event.findMany({
        where: { userId },
        include: {
            participants: true
        }
    })
    return events
}

export const insertEventInDatabase = async (
    name: string,
    description: string,
    type: string,
    format: string,
    starts: Date,
    ends: Date,
    price: number,
    participants_limit: number,
    subs_starts: Date,
    subs_ends: Date,
    userId: string
) => {
    const event = await prisma.event.create({
        data: {
            name,
            description,
            type,
            format,
            starts,
            ends,
            price,
            participants_limit,
            subs_starts,
            subs_ends,
            userId
        }
    })
    return event
}