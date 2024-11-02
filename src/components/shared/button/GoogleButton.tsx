'use client'
import React from 'react'

import { Button } from '@/src/components/ui/button'

import { FcGoogle } from 'react-icons/fc'

import { signIn } from '@/src/auth'
import { DEFAULT_REDIRECT_PATH } from '@/src/routes'

const GoogleButton = ({ children }: { children: React.ReactNode }) => {

    const handleSignInWithGoogle = async () => {
        try {
            await signIn('google', {
                redirectTo: DEFAULT_REDIRECT_PATH
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    return (
        <Button
            onClick={async () => await handleSignInWithGoogle()}
            className={`border-2 rounded border-hub-blue bg-hub-white text-hub-blue 
                hover:bg-hub-blue hover:text-hub-white hover:border-hub-blue gap-1 h-9`}>
            <FcGoogle size={20} />
            {children}
        </Button>
    )
}

export default GoogleButton