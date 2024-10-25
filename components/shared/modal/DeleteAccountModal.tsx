'use server'

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

import btnCss from '@/styles/Button.module.css'
import mdCss from '@/styles/Modal.module.css'
import DeleteAccountButton from '../button/DeleteAccountButton'

interface Props {
    children: React.ReactNode
}

const DeleteAccountModal = async ({ children }: Props) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='ghost'
                    className='text-center hover:bg-hub-white hover:text-hub-blue'>{children}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className={mdCss['modal-container']}>
                <AlertDialogHeader>
                    <AlertDialogTitle className={mdCss['modal-title']}>
                        Você tem certeza?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Você está prestes deletar sua conta, seus dados serão perdidos é isso mesmo que você deseja?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={`${btnCss['basic']}`}>
                        Não
                    </AlertDialogCancel>
                    <AlertDialogAction>
                        <DeleteAccountButton>Deletar conta</DeleteAccountButton>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAccountModal