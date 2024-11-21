'use client'

import React from 'react'
import { Button } from '../../ui/button'
import { handleSigninAction } from '@/src/actions/user-actions/signInAction'

const ProviderButton = ({ children, provider }: { children: React.ReactNode, provider: string }) => {

    const handleSignInWithProvider = async () => handleSigninAction(provider)

    return (
        <Button onSubmit={handleSignInWithProvider}
            className='w-full h-12 rounded-sm shadow-none flex gap-1
            text-grays-seven bg-grays-three hover:bg-grays-two text-base hover:text-grays-six font-medium'>
            {children}
        </Button>
    )
}

export default ProviderButton