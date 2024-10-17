import { z } from 'zod'

export const loginInstituitionSchema = z.object({
    email: z
        .string({ message: "Campo E-mail é obrigatório" })
        .email({ message: "Formato de e-mail inválido" })
        .trim(),
})

export type loginInstituitionSchemaType = z.infer<typeof loginInstituitionSchema>