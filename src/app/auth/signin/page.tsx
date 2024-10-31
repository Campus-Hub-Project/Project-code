'use server'

import SignInForm from '@/components/shared/forms/SigninForm'
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
                        Insira as informações da instituição para continuar.
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-36'>
                <SignInForm />
            </CardContent>
        </>
    )
}

export default SigninPage