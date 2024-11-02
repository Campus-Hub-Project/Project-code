'use server'

import { auth } from "@/src/auth"
import { newEventSchema, TypeNewEventSchema } from "@/src/hooks/use-form/new-event-useform"
import { insertNewInstituitionEvent } from "@/src/lib/queries/event"
import { findUniqueUserById } from "@/src/lib/queries/user"
import { eventDatesFormatter } from "./eventDateTimeFormatter"

export const createNewEvent = async (data: TypeNewEventSchema) => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role === 'USER') return null

    const isDataAsSchema = newEventSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const formattedEventDateTimeStarts = await eventDatesFormatter(
        isDataAsSchema.data.date.from, 
        false, 
        isDataAsSchema.data.startTime
    )

    const formattedEventDateTimeEnds = await eventDatesFormatter(isDataAsSchema.data.date.to, false, isDataAsSchema.data.endTime)
    
    const formattedEventDateTimeSubsStarts = await eventDatesFormatter(
        isDataAsSchema.data.subscribePeriod.from, 
        true
    )

    const formattedEventDateTimeSubsEnds = await eventDatesFormatter(isDataAsSchema.data.subscribePeriod.to, true)
    

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
        userId: session.user.id
    })

    return event
}
