'use server'

import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import React from 'react'

const EmailSendPage = async () => {
    return (
        <>
            <CardHeader className='-mt-28 text-center'>
                <CardTitle>
                    <span className='text-3xl font-semibold text-hub-blue'>Muito bem!</span>
                </CardTitle>
                <CardDescription className='mx-24'>
                    <span className='font-medium text-base text-hub-middlegray text-center'>
                        Uma mesagem de confirmação foi enviada ao e-mail. Por favor, verifique sua caixa de entrada.
                    </span>
                </CardDescription>
            </CardHeader>
        </>
    )
}

export default EmailSendPage