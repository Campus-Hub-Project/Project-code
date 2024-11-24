'use client'

import { Input } from '@/src/components/ui/input'
import React, { useState } from 'react'
import { IconMail, IconUser, IconLock, IconEye, IconEyeOff } from '@tabler/icons-react'

import { signupUseForm, TypeSignupSchema } from '@/src/hooks/use-form/auth-useform'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../ui/form'
import SubmitButton from '../button/SubmitButton'
import { handleSignup } from '@/src/actions/auth-action'

import formCss from '@/styles/Form.module.css'

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const form = signupUseForm()

    const submitForm = async (data: TypeSignupSchema) => handleSignup(data)
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className='flex flex-col gap-4'>
                <FormField
                    name='name'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconUser className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Seu nome aqui...' className={formCss['form-label']} type='text' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                                    <div
                                        className='absolute right-3 cursor-pointer'
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? (
                                            <IconEye className="text-grays-five" />
                                        ) : (
                                            <IconEyeOff className="text-grays-five" />
                                        )}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton>Criar conta</SubmitButton>
            </form>
        </Form>
    )
}

export default SignupForm