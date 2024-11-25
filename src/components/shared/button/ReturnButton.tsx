'use client'

import React from 'react'

import { Button } from '../../ui/button'
import { useRouter } from 'next/navigation'

const ReturnButton = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    return <Button onClick={() => router.back()}
        className='h-4 bg-transparent hover:bg-transparent rounded-none shadow-none m-0 p-0
         text-lg font-medium text-blues-three hover:border-b-2 hover:border-blues-four hover:text-blues-four'>
        {children}
    </Button>
}

export default ReturnButton