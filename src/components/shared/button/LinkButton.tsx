'use server'

import Link from 'next/link'
import React from 'react'

import buttonCss from '@/styles/Button.module.css'

const LinkButton = async ({ children, to, isGray = false, isJustIcon = false }:
    { children: React.ReactNode, to: string, isGray?: boolean, isJustIcon?: boolean }) => {

    if (isJustIcon) return <Link href={to}>{children}</Link>

    if (isGray) return <Link href={to}
        className={`${buttonCss['link-as-button-must-have']} ${buttonCss['grays-button']}`}>{children}</Link>

    return <Link href={to} className={`${buttonCss['link-as-button-must-have']} ${buttonCss['blues-button']}`}>{children}</Link>
}

export default LinkButton