'use server'

import ImageCard from '@/src/components/shared/card/ImageCard'
import { Card } from '@/src/components/ui/card'
import React from 'react'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <Card className='rounded border-none shadow-lg bg-hub-white h-5/6 w-11/12 flex'>
            <ImageCard src='/images/signin-page-image.jpg' alt='Imagem vetorial de uma pessoa realizando autenticação' />
            <Card className='rounded border-none shadow-lg h-full w-1/2 flex flex-col justify-center bg-hub-white'>
                {children}
            </Card>
        </Card>
    )
}

export default AuthLayout