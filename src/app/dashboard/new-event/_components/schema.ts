import { z } from 'zod'

// valores constantes e específicos, não apenas um array de strings
export const eventTypeEnum = ['lectures', 'workshop', 'bootcamp', 'conference', 'congress', 'other' ] as const 

const eventFormatEnum = ['inperson', 'online', 'hybrid'] as const

export const newEventSchema = z.object({
    name: z.
        string({ message: 'O campo "Nome" é obrigatório' })
        .trim(),
    description: z
        .string({ message: 'O campo "Descrição" é obrigatório' }),
    eventType: z
        .enum(eventTypeEnum),
    eventFormat: z
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
    applicationPeriod: z
        .object({
            from: z
                .date({ message: 'Escolha as datas de início e encerramento das inscrições.' }),
            to: z
                .date({ message: 'Escolha as datas de início e encerramento das inscrições.' })
                .optional()
        }),
        // .refine(
        //     (data) => data.to === undefined || data.from >= data.to,
        //     { message: 'As inscrições não pode terminar antes de começar' }
        // ),
    eventValue: z
        .number({ message: 'Esse campo aceita apenas números positivos' })
        .default(0.0)
        .refine(
            (value) => value >= 0, { message: 'Esse campo aceita apenas números positivos1' }
        ),
    eventLimit: z
        .number({ message: 'Esse campo aceita apenas números inteiros positivos' })
        .int({ message: 'Esse campo aceita apenas números inteiros positivos' })
        .default(0),
})

export type newEventSchemaType = z.infer<typeof newEventSchema>