'use server'

import { newEventSchema, newEventSchemaType } from "@/src/app/dashboard/new-event/_components/schema"
import { auth } from "../auth/auth"
import { prisma } from "../db"

export const createNewEvent = async (data: newEventSchemaType) => {

    const session = await auth()

    const isDataAsSchema = newEventSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const {
        name,
        description,
        eventType,
        eventFormat,
        eventDay,
        applicationPeriod,
        eventValue,
        eventLimit } = isDataAsSchema.data   
}
