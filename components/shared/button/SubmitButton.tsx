import React from 'react'
import { Button } from '@/components/ui/button'

import btnCss from '@/styles/Button.module.css'

interface Props {
    children: React.ReactNode,
    css?: string
}

const SubmitButton = ({ children, css }: Props) => {
    return (
        <Button type='submit'
            className={`${btnCss['basic']} ${css}`}>
            {children}
        </Button>
    )
}

export default SubmitButton