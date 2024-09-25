'use client'

import Link from 'next/link'
import React from 'react'
import Drop from '../Drop'
import Logout from '../Logout'
import { Button } from '@/components/ui/button'

interface Props {
    icons: {
        id: number,
        svg: JSX.Element,
        span: string,
        to: string | null,
    }[],
}

const Aside = ({ icons }: Props) => {

    return (
        <aside
            className='fixed top-12 bottom-12 left-12 max-h-screen overflow-y-auto p-6 rounded flex flex-col items-center gap-6 
        border shadow-md bg-hub-white'>
            <div className='mb-6'>
                <h1 className='text-hub-blue font-bold'>campus_hub</h1>
            </div>

            {icons.map((icon) => (
                <div className='text-hub-middlegray hover:text-hub-blue' key={icon.id}>
                    {icon.to ? (
                        <Link href={icon.to} className='flex flex-col items-center text-center gap-2 cursor-pointer'>
                            {icon.svg}
                            <span className='text-xs'>{icon.span}</span>
                        </Link>
                    ) : icon.span === 'Sair' ? (
                        <Logout>
                            <div className='flex flex-col items-center gap-2 mt-2'>
                                {icon.svg}
                                <span className='text-xs'>{icon.span}</span>
                            </div>

                        </Logout>
                    ) : (
                        <Drop>
                            <div className='flex flex-col items-center gap-2 mt-6'>
                                {icon.svg}
                                <span className='text-xs'>{icon.span}</span>
                            </div>
                        </Drop>
                    )}

                </div>
            ))}
        </aside>
    )
}

export default Aside
