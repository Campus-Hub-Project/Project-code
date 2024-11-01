'use server'

import React from 'react'

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
} from '@/src/components/ui/alert-dialog'

import modalCss from '@/styles/Modal.module.css'

import buttonCss from '@/styles/Button.module.css'
import SignoutButton from '../button/SignoutButton'
import { auth } from '@/src/auth'

const DeactivateModal = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <span
                    className={modalCss['modal-icon']}>
                    {children}
                </span>
            </AlertDialogTrigger>
            <AlertDialogContent className='rounded border-hub-middlegray bg-hub-white'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-hub-blue'>
                        Você tem certeza?
                    </AlertDialogTitle>
                    <AlertDialogDescription className='text-hub-middlegray'>
                        Você está prestes deletar sua conta, seus dados serão perdidos é isso mesmo que você deseja?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={buttonCss['basic']}>Não</AlertDialogCancel>
                    <AlertDialogAction className={buttonCss['reverse-basic']}>
                        <SignoutButton forever id={session?.user.id}>Deletar conta</SignoutButton>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeactivateModal