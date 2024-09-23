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
                <div className='text-hub-middlegray hover:text-sc-blue' key={icon.id}>
                    {icon.to ? (
                        <Link href={icon.to} className='flex flex-col items-center text-center gap-2 cursor-pointer hover:text-hub-blue'>
                            {icon.svg}
                            <span className='text-xs'>{icon.span}</span>
                        </Link>
                    ) : icon.span === 'Sair' ? (
                        <Drop>

                            {icon.svg}
                            <span className='text-xs'>{icon.span}</span>

                        </Drop>
                    ) : (
                        <Logout>
                            <Button className='flex flex-col items-center text-center gap-2 cursor-pointer hover:text-hub-blue'>
                                {icon.svg}
                                <span className='text-xs'>{icon.span}</span>
                            </Button>
                        </Logout>
                    )}

                </div>
            ))}
        </aside>
    )
}

export default Aside
