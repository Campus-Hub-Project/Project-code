'use server'

import { createNewEventSchema, CreateNewEventSchemaType } from "@/schemas/create-new-event-schema"
import { auth } from "../../src/auth"
import { insertEventInDatabase } from "@/lib/queries/event-queries"
import { eventDatesFormatter } from "./eventDateTimeFormatter"

const createNewEvent = async (data: CreateNewEventSchemaType) => {
    // vejo se o usuário está autenticado
    const session = await auth()
    if (!session?.user?.id) return null

    // verifica se os dados estão de acordo com a validação do zod
    const isDataAsSchema = createNewEventSchema.safeParse(data)
    if (!isDataAsSchema.success) return null

    // desestruturo o parâmetro e pego seus dados importantes
    const {
        name,
        description,
        type,
        format,
        eventDay,
        eventTimeStarts,
        eventTimeEnds,
        subscribePeriod,
        price,
        participants_limit } = isDataAsSchema.data

    // verifico se a data de início do evento ou a data de início das inscrições foram definidas
    if (eventDay.to === undefined || subscribePeriod.to === undefined) return null

    // formato as datas de início e fim do evento
    const startsEventDateTime = await eventDatesFormatter(eventDay.from, false, eventTimeStarts)
    const endsEventDateTime = await eventDatesFormatter(eventDay.to, false, eventTimeEnds)
    
    // removo a hora padrão do subscribePeriod.to e .from
    const subscribePeriodFrom = await eventDatesFormatter(subscribePeriod.from, true)
    const subscribePeriodTo = await eventDatesFormatter(subscribePeriod.to, true)
    
    // insiro os dados do evento no banco de dados
    const event = await insertEventInDatabase(
        name,
        description,
        type,
        format,
        startsEventDateTime,
        endsEventDateTime,
        price,
        participants_limit,
        subscribePeriodTo,
        subscribePeriodFrom,
        session.user.id!
    )

    // retorno o evento criado
    return event
}

export default createNewEvent
