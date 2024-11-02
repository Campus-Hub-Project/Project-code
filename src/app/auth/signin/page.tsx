'use server'

import LinkButton from '@/src/components/shared/button/LinkButton'
import SignInForm from '@/src/components/shared/forms/SigninForm'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card'
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
            <CardFooter className='mx-36 flex flex-col items-center justify-center gap-2'>
                <LinkButton to='/auth/signup' asLink>Ainda não tenho uma conta</LinkButton>
                <LinkButton to='/' asLink>Voltar à pagina inicial</LinkButton>
            </CardFooter>
        </>
    )
}

export default SigninPage