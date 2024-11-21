'use server'

import { newEventSchema, TypeNewEventSchema } from "@/src/hooks/use-formaaa/new-event-useform"
import { insertNewInstituitionEvent } from "@/src/lib/queries/event"
import { eventDatesFormatter } from "./eventDateTimeFormatter"
import { getUserSession } from "../user-actions/getUserSession"

export const createNewEvent = async (data: TypeNewEventSchema) => {
    const session = await getUserSession('INSTITUITION')
    if (!session) return null

    const isDataAsSchema = newEventSchema.safeParse(data)
    if (!isDataAsSchema.success) return null

    const formattedEventDateTimeStarts = new Date(
        await eventDatesFormatter(
            { date: isDataAsSchema.data.date.from, time: isDataAsSchema.data.startTime })
    )
    
    const formattedEventDateTimeEnds = new Date(
        await eventDatesFormatter({ date: isDataAsSchema.data.date.to, time: isDataAsSchema.data.endTime })
    )

    const formattedEventDateTimeSubsStarts = new Date(
        await eventDatesFormatter(
            { date: isDataAsSchema.data.subscribePeriod.from, isSubsPeriod: true })
    )

    const formattedEventDateTimeSubsEnds = new Date(
        await eventDatesFormatter({ date: isDataAsSchema.data.subscribePeriod.to, isSubsPeriod: true })
    )

    const event = await insertNewInstituitionEvent({
        name: isDataAsSchema.data.name,
        description: isDataAsSchema.data.description,
        type: isDataAsSchema.data.type,
        format: isDataAsSchema.data.format,
        starts: formattedEventDateTimeStarts,
        ends: formattedEventDateTimeEnds,
        subs_starts: formattedEventDateTimeSubsStarts,
        subs_ends: formattedEventDateTimeSubsEnds,
        participantsLimit: isDataAsSchema.data.participantsLimit,
        userId: session.user.id as string
    })

    return event
}
