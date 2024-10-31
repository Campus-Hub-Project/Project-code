'use server'

import SignupForm from '@/components/shared/forms/SignupForm'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const SignupPage = async () => {
    return (
        <>
            <CardHeader className='-mt-28 text-center '>
                <CardTitle>
                    <span className='text-3xl font-semibold text-hub-blue'>Cadastre-se</span>
                </CardTitle>
                <CardDescription className='mx-24'>
                    <span className='font-medium text-base text-hub-middlegray text-center'>
                        Insira as informações da instituição para criar uma conta.
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-36'>
                <SignupForm />
            </CardContent>
           
        </>
    )
}

export default SignupPage