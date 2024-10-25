'use server'

import React from 'react'

import Image from 'next/image'

import asideCss from '@/styles/Aside.module.css'

import SignoutModal from '../modal/SignoutModal'
import DeleteAccountModal from '../modal/DeleteAccountModal'

import AsideLinkIcon from './AsideLinkIcon'

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
        <aside className={asideCss['aside-container-config']}>
            <div className='mb-6'>
                <Image src='/images/campus-hub-logo.jpg' alt='Logo do campus_hub' width={100} height={100} />
            </div>

            {icons.map((icon) => (
                <div className='text-hub-middlegray hover:text-hub-blue' key={icon.id}>
                    {icon.to ? (
                        <AsideLinkIcon svg={icon.svg} to={icon.to} text={icon.span} />
                    ) : icon.span === 'Sair' ? (
                        <SignoutModal>
                            <div className='flex flex-col items-center gap-2 mt-2'>
                                {icon.svg}
                                <span className='text-xs'>{icon.span}</span>
                            </div>
                        </SignoutModal>
                    ) : (
                        <DeleteAccountModal>
                            <div className='flex flex-col items-center gap-2 mt-6'>
                                {icon.svg}
                                <span className='text-xs'>{icon.span}</span>
                            </div>
                        </DeleteAccountModal>
                    )}
                </div>
            ))}
        </aside>
    )
}

export default Aside
