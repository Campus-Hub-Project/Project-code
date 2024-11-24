'use server'

import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'
import {
    SignoutAndDeleteCardContent,
    SignoutAndDeleteCardDescription,
    SignoutAndDeleteCardHeader,
    SignoutAndDeleteCardTitle,
    SignoutAndDeleteCardWrapper
} from '@/src/components/shared/card/SignoutAndDeleteCard'

import React from 'react'

import SignoutDeleteButton from '@/src/components/shared/button/SignoutDeleteButton'

const SignoutPage = async () => {
    return (
        <>
            <MiddleCardHeader>
                <MiddleCardTitle>Sair da conta</MiddleCardTitle>
                <MiddleCardDescription>Aqui você poderá sair de sua conta</MiddleCardDescription>
            </MiddleCardHeader>
            <MiddleCardContent>
                <SignoutCard />
            </MiddleCardContent>
        </>
    )
}

export default SignoutPage

const SignoutCard = async () =>
    <SignoutAndDeleteCardWrapper>
        <SignoutAndDeleteCardHeader>
            <SignoutAndDeleteCardTitle>
                Você tem certeza?
            </SignoutAndDeleteCardTitle>
            <SignoutAndDeleteCardDescription>
                Ao apertar o botão abaixo você sairá da sua conta, seus dados serão salvos.
                É isso mesmo que você deseja?
            </SignoutAndDeleteCardDescription>
        </SignoutAndDeleteCardHeader>
        <SignoutAndDeleteCardContent>
            <SignoutDeleteButton>Sair</SignoutDeleteButton>
        </SignoutAndDeleteCardContent>
    </SignoutAndDeleteCardWrapper>