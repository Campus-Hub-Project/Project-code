'use client'

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, TypesignupSchema } from '@/src/hooks/use-form/signup-useform'

import formCss from '@/styles/Form.module.css'
import SubmitButton from '../button/SubmitButton'
import { signupWithCredentialsAction } from '@/src/actions/user-actions/signupWithCredentialsAction'


const SignupForm = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<TypesignupSchema>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const submitForm = async (data: TypesignupSchema) => {
        try {
            startTransition(async () => {
                await signupWithCredentialsAction(data)
                form.reset()
            })
        } catch (error) {

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Nome:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['form-text-input']}
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
                    name='email'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>E-mail:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['form-text-input']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='E-mail da instituição aqui...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Senha:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['form-text-input']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Senha da conta da instituição aqui...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton reverse extraCss='mt-4'>Criar conta</SubmitButton>
            </form>
        </Form>
    )
}

export default SignupForm