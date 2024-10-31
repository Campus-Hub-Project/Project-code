'use client'
import React, { useTransition } from 'react'

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import formCss from '@/styles/Form.module.css'

import {
    loginInstituitionSchema,
    loginInstituitionSchemaType
} from '@/schemas/login-instituition-schema'

import SubmitButton from '../button/SubmitButton'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import signInWithEmailAction from '@/src/actions/user-actions/signInWithEmailAction'

const LoginInstituitionForm = () => {

    const [isPending, startTransition] = useTransition()

    const form = useForm<loginInstituitionSchemaType>({
        resolver: zodResolver(loginInstituitionSchema),
        defaultValues: {
            email: "",
        }
    })

    const submitForm = async (data: loginInstituitionSchemaType) => {
        try {
            startTransition(
                async () => {
                    await signInWithEmailAction(data)
                    form.reset()
                })
        } catch (error) {
            alert('Erro: Algo não não permitiu o envio do e-mail, tente novamente mais tarde.')
            console.error(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className='w-full'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={formCss['label']}>Email:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    className={`${formCss['text-input']}`}
                                    {...field} placeholder='E-mail da instituição aqui...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton css='mt-4'>Enviar</SubmitButton>
            </form>
        </Form>
    )
}

export default LoginInstituitionForm
