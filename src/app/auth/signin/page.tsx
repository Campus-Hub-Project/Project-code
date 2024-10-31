'use server'

import LoginInstituitionForm from '@/components/shared/forms/login-instituition-form'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const SigninPage = async () => {
    return (
        <>
            <CardHeader className='-mt-28 text-center'>
                <CardTitle>
                    <span className='text-3xl font-semibold text-hub-blue'>Login</span>
                </CardTitle>
                <CardDescription className='mx-24'>
                    <span className='font-medium text-base text-hub-middlegray text-center'>
                        Insira o e-mail da instituição. Você receberá uma mensagem de confirmação para continuar.
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-36'>
                <LoginInstituitionForm />
            </CardContent>
        </>
    )
}

export default SigninPage