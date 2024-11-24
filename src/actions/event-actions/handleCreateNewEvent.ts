'use server'

import { newEventSchema, TypeNewEventSchema } from "@/src/hooks/use-form/new-event-useform"
import { getUserSession } from '@/src/actions/auth-action'

import { createNewEvent } from '@/src/lib/queries/event'
import { EventToInsert } from "@/src/interfaces/event"
import { EventType, EventFormat } from "@prisma/client"
import { formatDateTimeToUTC, formatDateToUTC } from "../format-actions/backend"

export const handleCreateNewEvent = async (data: TypeNewEventSchema) => {
    const session = await getUserSession('INSTITUITION')
    if (!session) return null

    const isDataAsSchema = newEventSchema.safeParse(data)
    if (!isDataAsSchema.success) return null

    const eventData = isDataAsSchema.data

    const dayStarts = await formatDateTimeToUTC({ date: eventData.day, time: eventData.starts })
    const dayEnds = await formatDateTimeToUTC({ date: eventData.day, time: eventData.ends })

    const subsDayStarts = await formatDateToUTC({ date: eventData.subs.from })
    const subsDayEnds = await formatDateToUTC({ date: eventData.subs.to })

    const eventToInsert: EventToInsert = {
        summary: eventData.summary,
        description: eventData.description,
        type: eventData.type as EventType,
        format: eventData.format as EventFormat,
        dayStarts: dayStarts,
        dayEnds: dayEnds,
        subsDayStarts: subsDayStarts,
        subsDayEnds: subsDayEnds,
        attendeesLimit: eventData.attendeesLimit,
        userId: session.user.id as string
    }

    const event = !!await createNewEvent({ event: eventToInsert })
    return event
}