'use server'

import LinkButton from '@/src/components/shared/button/LinkButton'
import NewVerificationForm from '@/src/components/shared/forms/NewVerificationForm'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card'
import React from 'react'

const NewVerificationPage = async () => {

    return (
        <>
            <CardHeader className='-mt-28 text-center'>
                <CardTitle>
                    <span className='text-bt-green text-3xl'>
                        Confirmando o seu e-mail
                    </span>
                </CardTitle>
                <CardDescription>
                    <span className='text-bt-lightgray'>
                        Estamos confirmando o seu e-mail. Isso pode levar alguns segundos.
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-24'>
                <NewVerificationForm />
                <LinkButton to='/auth/signin' reverse>Fazer login</LinkButton>
            </CardContent>
        </>
    )
}

export default NewVerificationPage