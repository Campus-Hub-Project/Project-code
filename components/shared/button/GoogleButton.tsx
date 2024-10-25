'use client'
import React from 'react'

import { Button } from '@/components/ui/button'

import signInWithGoogle from '@/lib/auth/signinWithGoogle'
import { FcGoogle } from 'react-icons/fc'

import btnCss from '@/styles/Button.module.css'

const GoogleButton = () => {

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    return (
        <Button
            onClick={handleSignInWithGoogle}
            className={`${btnCss['basic']} gap-1`}>
            <FcGoogle size={20} />
            Entrar com Google
        </Button>
    )
}

export default GoogleButton