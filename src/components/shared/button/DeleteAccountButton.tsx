'use client'

import React from 'react'

import drop from '@/src/lib/auth/drop'

import btnCss from '@/styles/Button.module.css'

interface Props {
    children: React.ReactNode,
}

const DeleteAccountButton = ({ children }: Props) => {

    const handleDeleteAccount = async () => {
        try {
            await drop()
        } catch (error) {
            alert('Algo deu errado, sua conta não foi deletada, tente novamente mais tarde')
            console.error(error);
            throw error
        }
    }

    return <button onClick={async () => handleDeleteAccount()} className={btnCss['rever-basic']}>{children}</button>
}

export default DeleteAccountButton