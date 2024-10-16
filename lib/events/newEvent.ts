'use server'

import {
    newEventSchema,
    newEventSchemaType
} from "@/src/app/dashboard/events/new-event/_components/schema"

import { auth } from "../auth/auth"
import { prisma } from "../db"

export const createNewEvent = async (data: newEventSchemaType) => {

    // vejo se o usuário está autenticado
    const session = await auth()
    if (!session?.user?.id) return null

    // valido as informações recebidas usando o schema do zod
    const isDataAsSchema = newEventSchema.safeParse(data)
    if (!isDataAsSchema.success) return null

    // uso a desestruturação para pegar os dados necessários
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

    // Junto o dia e horário que o evento começa/ termina para armazenar no banco de dados como DateTime
    const startsEventDateTime = new Date(`${eventDay.to}T${eventTimeStarts}`).toISOString()
    const endsEventDateTime = new Date(`${eventDay.from}T${eventTimeEnds}`).toISOString()

    // Uso o prisma para criar o evento no banco de dados passando os dados necessários
    const newEvent = await prisma.event.create({
        data: {
            name,
            description,
            type,
            format,
            starts: startsEventDateTime,
            ends: endsEventDateTime,
            price,
            participants_limit,
            subs_starts: subscribePeriod.to,
            subs_ends: subscribePeriod.from,
            userId: session.user?.id
        }
    })

    // retorno o evento criado
    return newEvent
}
