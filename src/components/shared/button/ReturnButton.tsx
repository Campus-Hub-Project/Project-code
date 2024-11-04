'use client'

import React from 'react'

import { Button } from '../../ui/button'
import { useRouter } from 'next/navigation'

import buttonCss from './Button.module.css'

const ReturnButton = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    return <Button onClick={() => router.back()}
        className={buttonCss['basic-link']}>
        {children}
    </Button>
}

export default ReturnButton