'use client'
import React from 'react'

import { Button } from '@/src/components/ui/button'

import buttonCss from '@/styles/Button.module.css'
import { participateInEventAction } from '@/src/actions/user-actions/participateInEventAction'
import { redirect, useRouter } from 'next/navigation'

const SubscribeEventButton = ({ children, id }: { children: React.ReactNode, id: string }) => {
    const router = useRouter()
    const handleSubscribeEvent = async () => {
        try {
            await participateInEventAction(id)
            router.push('/dashboard')
        } catch (error) {
            alert('Algo deu errado, você não se inscreveu no evento: ' + error)
        }
    }

    return <Button
        onClick={handleSubscribeEvent}
        className={`${buttonCss['reverse-basic']}`}>
        {children}
    </Button>
}

export default SubscribeEventButton
