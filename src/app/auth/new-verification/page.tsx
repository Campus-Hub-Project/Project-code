'use server'

import LinkButton from '@/src/components/shared/button/LinkButton'
import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'
import NewVerificationForm from '@/src/components/shared/forms/NewVerificationForm'
import React from 'react'

const NewVerificationPage = async () => {

    return (
        <>
            <MiddleCardHeader>
                <MiddleCardTitle>
                    Confirmando o seu e-mail...
                </MiddleCardTitle>
                <MiddleCardDescription>
                    Estamos confirmando o seu e-mail. Isso pode levar alguns segundos.
                </MiddleCardDescription>
            </MiddleCardHeader>
            <MiddleCardContent>
                <NewVerificationForm />
                <LinkButton to='/auth/signin'>Fazer login</LinkButton>
            </MiddleCardContent>
        </>
    )
}

export default NewVerificationPage