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

import { Button } from '@/src/components/ui/button'

import btnCss from '@/styles/Button.module.css'
import mdCss from '@/styles/Modal.module.css'

import SignoutButton from '../button/SignoutButton'

interface Props {
    children: React.ReactNode
}

const SignoutModal = async ({ children }: Props) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='ghost'
                    className='text-center hover:bg-hub-white hover:text-hub-blue'>{children}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className={mdCss['modal-container']}>
                <AlertDialogHeader>
                    <AlertDialogTitle className={mdCss['modal-title']}>Você tem certeza?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Você está prestes a sair de sua conta, é isso mesmo que voce deseja?
                        Seus dados serão salvos.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={`${btnCss['basic']}`}>
                        Voltar
                    </AlertDialogCancel>
                    <AlertDialogAction>
                        <SignoutButton>Sair</SignoutButton>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SignoutModal