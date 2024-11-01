'use server'
import Link from 'next/link'
import React from 'react'

const IconButton = async ({ icon }: { icon: { svg: JSX.Element, text: string, to: string } }) => {

    return <Link href={icon.to}
        className='text-xs text-center text-hub-middlegray hover:text-hub-blue flex flex-col justify-center items-center'>
        {icon.svg} {icon.text}
    </Link>
}

export default IconButton