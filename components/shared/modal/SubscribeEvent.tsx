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
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

import btnCss from '@/styles/Button.module.css'
import getIntoEvent from '@/lib/events/getIntoEvent'

interface Props {
    children: React.ReactNode,
    id: string
}

const SubscribeEvent = ({ children, id }: Props) => {

    const subscribe = async () => {
        try {
            await getIntoEvent(id)
            alert('Você se inscreveu no evento!')
        } catch (error) {
            alert('Algo deu errado, tente novamente mais tarde')
            console.error(error);
            throw error
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className={btnCss['basic-button-config']}>{children}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='rounded bg-hub-white'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-hub-blue'>Se inscrever no evento?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Ao se inscrever num evento, ele será adicionado a sua agenda de sua conta Google.
                        Você poderá removê-lo no momento que desejar.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        className={`${btnCss['basic-button-config']}`}>
                        Voltar
                    </AlertDialogCancel>
                    <AlertDialogAction className={`${btnCss['reverse-basic-button-config']}`}>
                        <button onClick={async () => await subscribe()}>Se inscrever</button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SubscribeEvent