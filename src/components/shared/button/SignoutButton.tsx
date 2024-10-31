'use client'
import logout from '@/src/lib/auth/logout'
import React from 'react'

import btnCss from '@/styles/Button.module.css'

interface Props {
    children: React.ReactNode
}

const SignoutButton = ({ children }: Props) => {

    const handleSignout = async () => {
        try {
            await logout()
        } catch (error) {
            alert('Não foi possível sair de sua conta, tente novamente mais tarde')
            console.error(error);
            throw error
        }
    }

    return <button onClick={handleSignout} className={btnCss['reverse-basic']}>{children}</button>
}

export default SignoutButton