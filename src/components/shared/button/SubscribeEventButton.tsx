'use client'
import React from 'react'

import { Button } from '@/src/components/ui/button'

import buttonCss from '@/styles/Button.module.css'
import { participateInEventAction } from '@/src/actions/user-actions/participateInEventAction'
import { redirect } from 'next/navigation'

const SubscribeEventButton = ({ children, id }: { children: React.ReactNode, id: string }) => {

    const handleSubscribeEvent = async () => {
        try {
            const event = await participateInEventAction(id)
            if (event) redirect('/dashboard')
        } catch (error) {
            alert('Algo deu errado, você não se inscreveu no evento')
        }
    }

    return <Button
        onClick={handleSubscribeEvent}
        className={`${buttonCss['reverse-basic']}`}>
        {children}
    </Button>
}

export default SubscribeEventButton
