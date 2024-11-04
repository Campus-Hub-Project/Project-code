'use client'

import React from 'react'

import buttonCss from '@/styles/Button.module.css'
import { Button } from '../../ui/button'
import { removeUserFromEventAction } from '@/src/actions/user-actions/removeUserFromEventAction'

const RemoveFromEventButton = ({ children, id }: { children: React.ReactNode, id: string }) => {

    const handleRemoveFromEvent = async () => {
        const response = await removeUserFromEventAction(id)
        if (response) alert('Você saiu do evento')
    }

    return <Button
        onClick={handleRemoveFromEvent}
        className={`${buttonCss['reverse-basic']}`}>
        {children}
    </Button>
}

export default RemoveFromEventButton