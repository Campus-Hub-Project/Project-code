import { z } from 'zod'

export const formSchema = z.object({
    email: z
        .string({ message: "Campo E-mail é obrigatório" })
        .email({ message: "Formato de e-mail inválido" })
        .trim(),
})

export type formSchemaType = z.infer<typeof formSchema>