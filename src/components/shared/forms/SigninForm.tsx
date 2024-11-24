'use client'

import React, { useState } from 'react'

import { IconMail, IconLock, IconEye, IconEyeOff } from '@tabler/icons-react'


import formCss from '@/styles/Form.module.css'
import { Form, FormField, FormItem, FormControl, FormMessage } from '../../ui/form'
import { Input } from '../../ui/input'
import { signinUseForm, TypeSigninSchema } from '@/src/hooks/use-form/auth-useform'
import SubmitButton from '../button/SubmitButton'
import { signInWithCredentials } from '@/src/actions/auth-action'

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const form = signinUseForm()

    const submitForm = async (data: TypeSigninSchema) => await signInWithCredentials(data)

    return (
        <Form {...form}>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    name='email'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconMail className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Seu e-mail aqui...' className={formCss['form-label']} type='text' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='password'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconLock className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Sua senha aqui...' className={formCss['form-label']}
                                        type={showPassword ? 'text' : 'password'} />
                                    <div className='absolute right-3 ml-3 cursor-pointer'
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? (
                                            <IconEye className='text-grays-five' />
                                        ) : (
                                            <IconEyeOff className='text-grays-five' />
                                        )}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton>Entrar</SubmitButton>
            </form>
        </Form>
    )
}

export default SigninForm