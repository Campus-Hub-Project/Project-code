'use client'
import React from 'react'


import { Button } from '@/components/ui/button'
import { AlertDialogHeader, AlertDialogFooter } from '@/components/ui/alert-dialog'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@radix-ui/react-alert-dialog'
interface Props {
    children: React.ReactNode
}

const Drop = ({ children }: Props) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {
                    <Button variant='ghost'>{children}</Button>
                }
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Você tem certeza?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Você está prestes deletar sua conta, seus dados serão perdidos é isso mesmo que você deseja?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Não</AlertDialogCancel>
                    <AlertDialogAction>Deletar conta</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
    
}

export default Drop