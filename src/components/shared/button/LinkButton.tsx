import React from 'react'

import Link from 'next/link'

import buttonCss from './Button.module.css'

const LinkButton = async ({ children, to, reverse = false, asLink = false }:
    { children: React.ReactNode, to: string, reverse?: boolean, asLink?: boolean }) => {

    if (asLink) return <Link href={to} className={buttonCss['basic-link']}>{children}</Link>
    
    let css = 'border-2 rounded flex items-center justify-center px-4 text-sm h-9 text-center'
    if (reverse) css = `${css} text-hub-white bg-hub-blue border-hub-blue hover:text-hub-blue hover:bg-hub-white`
    if (!reverse) css = `${css} border-hub-blue bg-hub-white text-hub-blue hover:bg-hub-blue hover:text-hub-white hover:border-hub-blue`


    return <Link href={to} className={css}>{children}</Link>
}

export default LinkButton