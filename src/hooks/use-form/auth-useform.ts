import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const signupSchema = z.object({
    name: z.string().trim()
        .min(1, { message: 'Preencha o campo "Nome"' }),
    email: z.string()
        .email({ message: 'Use um e-mail válido' }),
    password: z.string().trim()
        .min(6, { message: 'O campo "Senha" deve ter pelo menos 6 caracteres' }),
})

export type TypeSignupForm = z.infer<typeof signupSchema>

export const signupUseForm = () =>
    useForm<TypeSignupForm>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

export const signinSchema = z.object({
    email: z.string()
        .email({ message: 'Use um e-mail válido' }),
    password: z.string().trim()
        .min(1, { message: 'Preencha o campo "Senha"' }),
})

export type TypeSigninForm = z.infer<typeof signinSchema>

export const signinUseForm = () =>
    useForm<TypeSigninForm>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })
