'use server'

import LinkButton from '@/src/components/shared/button/LinkButton'
import SignupForm from '@/src/components/shared/forms/SignupForm'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card'
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
            <CardFooter className='mx-36 flex flex-col items-center justify-center gap-2'>
                <LinkButton to='/auth/signin' asLink>Já tenho uma conta</LinkButton>
                <LinkButton to='/' asLink>Voltar à pagina inicial</LinkButton>
            </CardFooter>
        </>
    )
}

export default SignupPage