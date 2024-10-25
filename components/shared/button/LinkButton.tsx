import React from 'react'

import Link from 'next/link'

import btnCss from '@/styles/Button.module.css'

interface Props {
    children: React.ReactNode,
    to: string,
}

const LinkButton = async ({ children, to }: Props) => {
    return (
        <Link
            href={to}
            className={btnCss['link']}>
            {children}
        </Link>
    )
}

export default LinkButton