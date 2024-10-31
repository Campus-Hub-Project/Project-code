'use client'
import React from 'react'

import { Button } from '@/src/components/ui/button'

import formCss from '@/styles/Button.module.css'
import getIntoEvent from '@/src/lib/events/getIntoEvent'

interface Props {
    children: React.ReactNode,
    id: string
}

const SubscribeEventButton = ({ children, id }: Props) => {

    const handleSubscribeEvent = async (id: string) => {
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
        <Button
            onClick={async () => await handleSubscribeEvent(id)}
            className={formCss['basic']}>
            {children}
        </Button>
    )
}

export default SubscribeEventButton
