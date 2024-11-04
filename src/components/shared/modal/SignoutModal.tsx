'use client'
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
import { signoutAction } from '@/src/actions/user-actions/signoutAction'

const SignoutModal = ({ children }: { children: React.ReactNode }) => {

    const handleSignout = async () => await signoutAction()

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
                    <AlertDialogAction onClick={handleSignout} className={buttonCss['reverse-basic']}>Sair</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SignoutModal