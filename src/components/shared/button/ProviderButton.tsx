'use client'

import React from 'react'
import { Button } from '../../ui/button'
import { signInWithGoogle } from '@/src/actions/auth-action'

const ProviderButton = ({ children }: { children: React.ReactNode }) => {

    const handleSignInWithProvider = async () => {
        await signInWithGoogle()
    }

    return (
        <Button onClick={handleSignInWithProvider}
            className='w-full h-12 rounded-sm shadow-none flex gap-1
            text-grays-seven bg-grays-three hover:bg-grays-two text-base hover:text-grays-six font-medium'>
            {children}
        </Button>
    )
}

export default ProviderButton