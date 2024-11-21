'use client'

import React from 'react'

import { Button } from '@/src/components/ui/button'

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <Button type='submit' className='w-full lg:h-12 rounded-sm shadow-none text-base text-blues-seven bg-blues-three
                 hover:bg-blues-two hover:text-blues-six font-medium'>{children}</Button>
    )
}

export default SubmitButton