'use client'

import Link from 'next/link'
import React from 'react'
import Logout from '../logout'
import Drop from '../drop'
import Image from 'next/image'

import asideCss from '@/styles/Aside.module.css'

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
            className={asideCss['aside-container-config']}>
            <div className='mb-6'>
                <Image src='/images/campus-hub-logo.jpg' alt='Logo do campus_hub' width={100} height={100}/>
            </div>

            {icons.map((icon) => (
                <div className='text-hub-middlegray hover:text-hub-blue' key={icon.id}>
                    {icon.to ? (
                        <Link href={icon.to} className={asideCss['aside-link-config']}>
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
