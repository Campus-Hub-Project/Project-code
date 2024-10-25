'use server'
import Link from 'next/link'
import React from 'react'

import asdCss from '@/styles/Aside.module.css'

interface Props {
    svg: JSX.Element,
    to: string,
    text: string,
}

const AsideLinkIcon = async ({ svg, to, text }: Props) => {
    return (
        <Link href={to} className={asdCss['aside-complete-icon-config']}>
            {svg}
            <span className='text-xs'>{text}</span>
        </Link>
    )
}

export default AsideLinkIcon
