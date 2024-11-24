'use server'

import Link from 'next/link'
import React from 'react'

const IconButton = ({ children, to }: { children: React.ReactNode, to: string }) =>
    <Link href={to}
        className='py-3 font-medium text-lg flex items-center gap-2
        text-grays-four hover:text-blues-one hover:border-r-4 hover:border-blues-one'>{children}</Link>

export default IconButton
