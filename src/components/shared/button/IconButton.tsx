'use server'

import Link from 'next/link'
import React from 'react'
import { Button } from '../../ui/button'

const IconLinkButton = ({ children, to }: { children: React.ReactNode, to: string }) =>
    <Link href={to}
        className='py-3 font-medium text-lg flex items-center gap-2
        text-grays-four hover:text-blues-one hover:border-r-4 hover:border-blues-one'>{children}</Link>

const IconButton = ({ children }: { children: React.ReactNode, to: string }) =>
    <Button className='p-0 m-0 font-medium text-lg flex gap-2 bg-transparent hover:bg-transparent w-full 
    text-grays-four hover:text-blues-one hover:border-r-4 hover:border-blues-one'>{children}</Button>

export {
    IconLinkButton, IconButton
}
