'use client'

import React, { useTransition } from 'react'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitButton from '../button/SubmitButton'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import formCss from '@/styles/Form.module.css'
import { TypeSigninSchema, signinSchema } from '@/hooks/use-form/signin-useform'

const SignInForm = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<TypeSigninSchema>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const submitForm = async (data: TypeSigninSchema) => {
        startTransition(async () => {
            //await signInAction(data)
            form.reset()
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={formCss['label']}>Email:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['text-input']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Nome da instituição aqui...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className={formCss['form-item-layout']}>
                            <FormLabel className={formCss['label']}>Senha:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['text-input']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Senha da conta cadastrada aqui...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton reverse extraCss='mt-4'>Logar</SubmitButton>
            </form>
        </Form>
    )
}

export default SignInForm