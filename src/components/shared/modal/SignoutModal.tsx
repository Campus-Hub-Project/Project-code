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

const SignoutModal = async ({ children }: { children: React.ReactNode }) => {
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
                    <AlertDialogTitle className='text-hub-blue'>Você tem certeza?</AlertDialogTitle>
                    <AlertDialogDescription className='text-hub-middlegray'>
                        Você está prestes a sair de sua conta, é isso mesmo que voce deseja?
                        Seus dados serão salvos.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={buttonCss['basic']}>Voltar</AlertDialogCancel>
                    <AlertDialogAction className={buttonCss['reverse-basic']}>
                        <SignoutButton>Sair</SignoutButton>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SignoutModal