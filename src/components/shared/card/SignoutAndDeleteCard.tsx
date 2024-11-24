'use server'

'use server'

import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../ui/card'
import { Button } from '../../ui/button'

import buttonCss from '@/styles/Button.module.css'

const DeleteAccountCardww = async () => {
    return (
        <Card className='w-full h-fit border-2 border-grays-five bg-grays-seven rounded-sm p-4 shadow-none'>
            <CardHeader className='p-0 text-center'>
                <CardTitle className='font-semibold text-2xl text-blues-three'>Você tem certeza?</CardTitle>
                <CardDescription className='p-0 font-medium text-base text-grays-four'>
                    Ao apertar o botão abaixo sua conta será deletada, seus dados serão perdidos para sempre.
                    É isso mesmo que você deseja?
                </CardDescription>
            </CardHeader>
            <CardContent className='p-0 pt-4'>
                <Button className={`h-12 w-full ${buttonCss['blues-button']}`}>Deletar minha conta</Button>
            </CardContent>
        </Card>
    )
}

interface Props { children: React.ReactNode }

const SignoutAndDeleteCardWrapper = async ({ children }: Props) =>
    <Card className='w-full h-fit border-2 border-grays-five bg-grays-seven rounded-sm p-4 shadow-none'>{children}</Card>

const SignoutAndDeleteCardHeader = async ({ children }: Props) =>
    <CardHeader className='p-0 text-center'>{children}</CardHeader>

const SignoutAndDeleteCardTitle = async ({ children }: Props) =>
    <CardTitle className='font-semibold text-2xl text-blues-three'>{children}</CardTitle>

const SignoutAndDeleteCardDescription = async ({ children }: Props) =>
    <CardDescription className='p-0 font-medium text-base text-grays-four'>{children}</CardDescription>

const SignoutAndDeleteCardContent = async ({ children }: Props) =>
    <CardContent className='p-0 pt-4'>{children}</CardContent>

export {
    SignoutAndDeleteCardWrapper, SignoutAndDeleteCardHeader, SignoutAndDeleteCardTitle,
    SignoutAndDeleteCardDescription, SignoutAndDeleteCardContent
}