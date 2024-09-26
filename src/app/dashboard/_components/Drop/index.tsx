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
            <AlertDialogContent>
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
                        className='text-hub-blue border-2 rounded border-hub-blue bg-hub-white
                        hover:text-hub-white hover:bg-hub-blue'>
                        Não
                    </AlertDialogCancel>
                    <AlertDialogAction
                    className='border-2 rounded text-hub-white bg-hub-blue border-hub-blue
                    hover:text-hub-blue hover:bg-hub-white'>
                        <button onClick={() => handleDeleteAccount()}>Deletar conta</button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}

export default Drop