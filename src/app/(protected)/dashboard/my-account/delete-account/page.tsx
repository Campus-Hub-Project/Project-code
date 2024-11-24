'use server'

import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'
import { SignoutAndDeleteCardContent, SignoutAndDeleteCardDescription, SignoutAndDeleteCardHeader, SignoutAndDeleteCardTitle, SignoutAndDeleteCardWrapper } from '@/src/components/shared/card/SignoutAndDeleteCard'

import React from 'react'

import SignoutDeleteButton from '@/src/components/shared/button/SignoutDeleteButton'

const DeleteAccountPage = async () => {
    return (
        <>
            <MiddleCardHeader>
                <MiddleCardTitle>Deletar conta</MiddleCardTitle>
                <MiddleCardDescription>Aqui você poderá deletar sua conta</MiddleCardDescription>
            </MiddleCardHeader>
            <MiddleCardContent>
                <DeleteAccountCard />
            </MiddleCardContent>
        </>
    )
}

export default DeleteAccountPage

const DeleteAccountCard = async () =>
    <SignoutAndDeleteCardWrapper>
        <SignoutAndDeleteCardHeader>
            <SignoutAndDeleteCardTitle>
                Você tem certeza?
            </SignoutAndDeleteCardTitle>
            <SignoutAndDeleteCardDescription>
                Ao apertar o botão abaixo sua conta será deletada, seus dados serão perdidos para sempre.
                É isso mesmo que você deseja?
            </SignoutAndDeleteCardDescription>
        </SignoutAndDeleteCardHeader>
        <SignoutAndDeleteCardContent>
            <SignoutDeleteButton isForever>Deletar minha conta</SignoutDeleteButton>
        </SignoutAndDeleteCardContent>
    </SignoutAndDeleteCardWrapper>