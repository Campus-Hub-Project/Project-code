'use server'

import ImageCard from '@/src/components/shared/card/ImageCard'
import HalfContentHalfImageLayout from '@/src/components/shared/layouts/HalfContentHalfImageLayout'
import { Card } from '@/src/components/ui/card'
import React from 'react'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <HalfContentHalfImageLayout>
            <ImageCard src='/images/signin-signup.jpg' alt='Imagem vetorial de uma pessoa realizando autenticação' />
            <Card className='rounded border-none shadow-lg h-full w-1/2 flex flex-col justify-center bg-hub-white'>
                {children}
            </Card>
        </HalfContentHalfImageLayout>
    )
}

export default AuthLayout