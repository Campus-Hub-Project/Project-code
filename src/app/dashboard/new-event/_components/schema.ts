import { z } from 'zod'

export const newEventSchema = z.object({
    name: z.
        string({ message: 'O campo "Nome" é obrigatório' })
        .trim(),
    description: z
        .string({ message: 'O campo "Descrição" é obrigatório' }),
    eventType: z.string({ message: 'Obrigatório' }),
    eventFormat: z.string({ message: "Obrigatório" }),
    eventDay: z
        .date({ message: 'Escolha a data que o evento ocorre.' }),
    applicationPeriod: z
        .date({ message: 'Escolha as datas de início e encerramento das inscrições.' }),
    eventValue: z
        .number({ message: 'Esse campo aceita apenas números positivos' })
        .positive({ message: "Esse campo aceita apenas números positivos" })
        .default(0.0),
    eventLimit: z
        .number({ message: 'Esse campo aceita apenas números inteiros positivos' })
        .positive({ message: "Esse campo aceita apenas números inteiros positivos" })
        .int({ message: 'Esse campo aceita apenas números inteiros positivos' })
        .default(0),
})

export type newEventSchemaType = z.infer<typeof newEventSchema>