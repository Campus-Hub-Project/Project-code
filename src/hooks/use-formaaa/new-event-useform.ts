import { z } from 'zod'

// valores constantes e específicos, não apenas um array de strings
export const types = ['lectures', 'workshop', 'bootcamp', 'conference', 'congress', 'other'] as const

const formats = ['inperson', 'online', 'hybrid'] as const

export const newEventSchema = z.object({
    name: z.
        string().trim().min(1, { message: 'O campo "Nome" é obrigatório' }),
    description: z
        .string().trim()
        .min(10, { message: 'O campo "Descrição" deve ter no mínimo 10 caracteres' })
        .max(300, { message: 'O campo "Descrição" deve ter no máximo 300 caracteres' }),
    type: z
        .enum(types),
    format: z
        .enum(formats),
    date: z
        .object({
            from: z.date({ message: "A data de início do evento é obrigatória" }),
            to: z.date({ message: "A data de encerramento do evento é obrigatória" }),
        })
        .refine(
            (data) => !data.to || data.to >= data.from,
            { message: "A data de término do evento não pode ser anterior à data de início" }
        ),
    startTime: z
        .string({ message: "O campo do horário do início do evento é obrigatório." }),
    endTime: z
        .string({ message: "O campo do horário do final do evento é obrigatório." }),
    subscribePeriod: z
        .object({
            from: z.date({ message: "A data de início das inscrições é obrigatória." }),
            to: z.date({ message: "A data de encerramento das inscrições é obrigatória" }),
        })
        .refine(
            (period) => !period.to || period.to >= period.from,
            { message: "A data de encerramento das inscrições não pode ser anterior à data de início" }
        ),
    participantsLimit: z
        .preprocess((value) => Number(value), z.number().int().min(0, { message: "Esse campo aceita apenas números inteiros positivos" }))
        .default(0),

})

export type TypeNewEventSchema = z.infer<typeof newEventSchema>