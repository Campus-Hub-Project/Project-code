'use client'

import React from 'react'

import buttonCss from '@/styles/Button.module.css'
import { Button } from '../../ui/button'
import { removeUserFromEventAction } from '@/src/actions/user-actions/removeUserFromEventAction'
import { useRouter } from 'next/navigation'

const RemoveFromEventButton = ({ children, id }: { children: React.ReactNode, id: string }) => {
    const router = useRouter()
    const handleRemoveFromEvent = async () => {
        const response = await removeUserFromEventAction(id)
        if (response) router.push('/dashboard')
    }

    return <Button
        onClick={handleRemoveFromEvent}
        className={`${buttonCss['reverse-basic']}`}>
        {children}
    </Button>
}

export default RemoveFromEventButton