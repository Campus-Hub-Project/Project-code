import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const types = ['lectures', 'workshop', 'bootcamp', 'conference', 'congress', 'other'] as const

const formats = ['inperson', 'online', 'hybrid'] as const

export const newEventSchema = z.object({
    summary: z.string().trim()
        .min(1, { message: 'Preencha o campo para o nome' })
        .max(30, { message: 'O campo para o nome deve ter no máximo 30 caracteres' }),
    description: z.string().trim()
        .min(10, { message: 'O campo para a descrição deve ter no mínimo 10 caracteres' })
        .max(300, { message: 'O campo para a descrição deve ter no máximo 300 caracteres' }),
    type: z
        .enum(types, { message: 'Escolha o tipo do evento' }),
    format: z
        .enum(formats, { message: 'Escolha o formato do evento' }),
    day: z
        .date({ message: "A data de início do evento é obrigatória" }),
    starts: z
        .string({ message: "Preencha o campo do horário do início do evento." }),
    ends: z
        .string({ message: "Preencha o campo do horário do final do evento." }),
    subs: z
        .object({
            from: z.date({ message: "A data de início das inscrições é obrigatória." }),
            to: z.date({ message: "A data de encerramento das inscrições é obrigatória" }),
        })
        .refine(
            (period) => !period.to || period.to >= period.from,
            { message: "A data de encerramento das inscrições não pode ser anterior à data de início" }
        ),
    atendeesLimit: z
        .preprocess((value) => Number(value), z.number().int()
            .min(0, { message: 'O campo de limite de participantes deve ser preenchido por um número' }))
        .default(0),
})

export type TypeNewEventSchema = z.infer<typeof newEventSchema>

export const newEventUseForm = () =>
    useForm<TypeNewEventSchema>({
        resolver: zodResolver(newEventSchema),
        defaultValues: {
            summary: '',
            description: '',
            type: undefined,
            format: undefined,
            day: undefined,
            starts: undefined,
            ends: undefined,
            subs: { from: undefined, to: undefined },
            atendeesLimit: undefined
        }
    })
