'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { formSchema, formSchemaType } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import signInWithEmail from '@/lib/auth/signinWithEmail'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const AuthForm = () => {

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    })

    const submitForm = async (data: formSchemaType) => {
        try {
            await signInWithEmail(data);
        } catch (error) {
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
                    className='mt-4 border-hub-blue border-2 rounded bg-hub-white text-sm
                    text-hub-blue hover:bg-hub-blue hover:text-hub-white'>
                    Enviar
                </Button>
            </form>
        </Form>
    )
}

export default AuthForm
