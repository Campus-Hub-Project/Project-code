'use client'
import React from 'react'

import { Button } from '@/src/components/ui/button'

import signInWithGoogle from '@/src/lib/auth/signinWithGoogle'
import { FcGoogle } from 'react-icons/fc'

import btnCss from '@/styles/Button.module.css'

const GoogleButton = ({ children }: { children: React.ReactNode }) => {

    const handleSignInWithGoogle = async () => {
        try {
            alert('Clicou')
            await signInWithGoogle()
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