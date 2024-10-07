'use server'

import { newEventSchema, newEventSchemaType } from "@/src/app/dashboard/new-event/_components/schema"
import { auth } from "../auth/auth"
import { prisma } from "../db"

export const createNewEvent = async (data: newEventSchemaType) => {

    const session = await auth()

    if (!session?.user?.id) return null

    const isDataAsSchema = newEventSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const {
        name,
        description,
        eventType,
        eventFormat,
        eventDay,
        eventTime,
        applicationPeriod,
        eventValue,
        eventLimit } = isDataAsSchema.data

    if (eventDay.to === undefined || applicationPeriod.to === undefined) return null

    const newEvent = await prisma.event.create({
        data: {
            name,
            description,
            eventType,
            eventFormat,
            eventDayTo: eventDay.to,
            eventDayFrom: eventDay.from,
            applicationPeriodTo: applicationPeriod.to,
            applicationPeriodFrom: applicationPeriod.from,
            eventTime,
            eventValue,
            eventLimit,
            userId: session.user?.id
        }
    })

    return newEvent
}
