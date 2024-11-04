'use client'

import React from 'react'

import buttonCss from '@/styles/Button.module.css'
import { Button } from '../../ui/button'
import { removeUserFromEventAction } from '@/src/actions/user-actions/removeUserFromEventAction'

const RemoveFromEventButton = ({ children, id }: { children: React.ReactNode, id: string }) => {

    const handleRemoveFromEvent = async () => await removeUserFromEventAction(id)

    return <Button
        onClick={handleRemoveFromEvent}
        className={`${buttonCss['reverse-basic']}`}>
        {children}
    </Button>
}

export default RemoveFromEventButton