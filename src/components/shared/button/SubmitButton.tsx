import { Button } from '@/src/components/ui/button'
import React from 'react'

const SubmitButton = ({ children, reverse = false, extraCss }: {children: React.ReactNode, reverse?: boolean, extraCss?: string}) => {

    let css = 'border-2 rounded'
    if (!reverse) css = `${css}  border-hub-blue bg-hub-white text-hub-blue hover:bg-hub-blue hover:text-hub-white hover:border-hub-blue`
    if (reverse) css = `${css} text-hub-white bg-hub-blue border-hub-blue hover:text-hub-blue hover:bg-hub-white`

    return <Button type='submit' className={`${css} ${extraCss}`}>{children}</Button>
}

export default SubmitButton