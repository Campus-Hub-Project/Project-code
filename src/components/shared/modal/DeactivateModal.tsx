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

const DeactivateModal = async ({ children }: { children: React.ReactNode }) => {
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
                    <AlertDialogAction className={buttonCss['reverse-basic']}>Deletar conta</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeactivateModal