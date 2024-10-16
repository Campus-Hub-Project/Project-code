'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction
} from '@/components/ui/alert-dialog'
import drop from '@/lib/auth/drop'
import logout from '@/lib/auth/logout'

import btnCss from '@/styles/Button.module.css'

interface Props {
    children: React.ReactNode
}

const Drop = ({ children }: Props) => {

    const handleDeleteAccount = async () => {
        try {
            const response = await drop()

            if (response.success) logout()
        } catch (error) {
            throw error
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='ghost'
                    className='text-center hover:bg-hub-white hover:text-hub-blue'>{children}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='rounded bg-hub-white'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-hub-blue'>
                        Você tem certeza?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Você está prestes deletar sua conta, seus dados serão perdidos é isso mesmo que você deseja?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        className={`${btnCss['basic-button-config']}`}>
                        Não
                    </AlertDialogCancel>
                    <AlertDialogAction
                    className={`${btnCss['reverse-basic-button-config']}`}>
                        <button onClick={() => handleDeleteAccount()}>Deletar conta</button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Drop