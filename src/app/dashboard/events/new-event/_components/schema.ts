import { z } from 'zod'

// valores constantes e específicos, não apenas um array de strings
export const eventTypeEnum = ['lectures', 'workshop', 'bootcamp', 'conference', 'congress', 'other'] as const

const eventFormatEnum = ['inperson', 'online', 'hybrid'] as const

export const newEventSchema = z.object({
    name: z.
        string({ message: 'O campo "Nome" é obrigatório' })
        .trim(),
    description: z
        .string({ message: 'O campo "Descrição" é obrigatório' }),
    type: z
        .enum(eventTypeEnum),
    format: z
        .enum(eventFormatEnum),
    eventDay: z
        .object({
            from: z
                .date({ message: "O dia do evento é obrigatório" }),
            to: z
                .date({ message: "O dia do evento é obrigatório" })
                .optional()
        })
        .refine(
            (data) => data.to === undefined || data.from <= data.to,
            { message: "O evento não pode terminar antes de começar" }
        ),
    eventTimeStarts: z
        .string({ message: "O campo do horário do início do evento é obrigatório." }),
    eventTimeEnds: z
        .string({ message: "O campo do horário do final do evento é obrigatório." }),
    subscribePeriod: z
        .object({
            from: z
                .date({ message: 'Escolha as datas de início e encerramento das inscrições.' }),
            to: z
                .date({ message: 'Escolha as datas de início e encerramento das inscrições.' })
                .optional()
        }),
    price: z
        .number({ message: 'Esse campo aceita apenas números positivos' })
        .default(0.0)
        .refine(
            (value) => value >= 0, { message: 'Esse campo aceita apenas números positivos1' }
        ),
    participants_limit: z
        .number({ message: 'Esse campo aceita apenas números inteiros positivos' })
        .int({ message: 'Esse campo aceita apenas números inteiros positivos' })
        .default(0),
})

export type newEventSchemaType = z.infer<typeof newEventSchema>