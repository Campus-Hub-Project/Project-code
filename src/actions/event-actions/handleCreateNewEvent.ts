'use server'

import { newEventSchema, TypeNewEventSchema } from "@/src/hooks/use-form/new-event-useform"
import { getUserSession } from "../user-actions/getUserSession"

import { createNewEvent } from '@/src/lib/queries/event'
import { formatDateToUTC, formatDateTimeToUTC } from "./formatDateTime"

export const handleCreateNewEvent = async (data: TypeNewEventSchema) => {
    const session = await getUserSession('INSTITUITION')
    if (!session) return null

    const isDataAsSchema = newEventSchema.safeParse(data)
    if (!isDataAsSchema.success) return null

    const event = isDataAsSchema.data

    const dayStarts = await formatDateTimeToUTC({ date: event.day, time: event.starts })
    const dayEnds = await formatDateTimeToUTC({ date: event.day, time: event.ends })

    const subsDayStarts = await formatDateToUTC({ date: event.subs.from })
    const subsDayEnds = await formatDateToUTC({ date: event.subs.to })

    // await createNewEvent(event)

    // 2- FORMATAR A ENTRADA DE DATAS
    // 3- CORRIGIR A FORMA COMO OS PARAMETROS SÃO PASSADOS OU RECEBIDOS



    // const event = await insertNewInstituitionEvent({
    //     name: isDataAsSchema.data.name,
    //     description: isDataAsSchema.data.description,
    //     type: isDataAsSchema.data.type,
    //     format: isDataAsSchema.data.format,
    //     starts: formattedEventDateTimeStarts,
    //     ends: formattedEventDateTimeEnds,
    //     subs_starts: formattedEventDateTimeSubsStarts,
    //     subs_ends: formattedEventDateTimeSubsEnds,
    //     participantsLimit: isDataAsSchema.data.participantsLimit,
    //     userId: session.user.id as string
    // })

    return true
}