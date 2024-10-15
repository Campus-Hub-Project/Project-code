'use client'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema, formSchemaType } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import signInWithEmail from '@/lib/auth/signinWithEmail'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import btCss from '@/styles/Button.module.css'

const AuthForm = () => {

    const [isPending, startTransition] = useTransition()

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    })

    const submitForm = async (data: formSchemaType) => {
        try {
            startTransition(async () => {
                await signInWithEmail(data)
                form.reset()
            })
        } catch (error) {
            alert('Algo deu errado, tente novamente mais tarde')
            console.error(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className='w-full mx-12'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-hub-blue font-semibold'>Email:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    className='
                                w-full rounded border-2 border-hub-middlegray text-hub-middlegray
                                 focus:border-hub-blue focus:text-hub-blue'
                                    {...field} placeholder='E-mail da instituição aqui...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'
                    className={`${btCss['basic-button-config']} mt-4`}>
                    Enviar
                </Button>
            </form>
        </Form>
    )
}

export default AuthForm
