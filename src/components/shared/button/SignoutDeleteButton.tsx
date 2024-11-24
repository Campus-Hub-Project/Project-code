'use client'

import React from 'react'

import buttonCss from '@/styles/Button.module.css'
import { Button } from '../../ui/button'
import { useRouter } from 'next/navigation'
import { regularSignout } from '@/src/actions/auth-action'

const SignoutDeleteButton = ({ children, isForever = false }: { children: React.ReactNode, isForever?: boolean }) => {
    const router = useRouter()

    const handleSignoutDelete = async () => {
        if (isForever) {
            await regularSignout({ isForever: true })
            router.push('/')
        }
        else {
            await regularSignout({ isForever: false })
            router.push('/')
        }
    }

    return <Button onClick={handleSignoutDelete} className={`h-12 w-full ${buttonCss['blues-button']}`}>{children}</Button>
}

export default SignoutDeleteButton