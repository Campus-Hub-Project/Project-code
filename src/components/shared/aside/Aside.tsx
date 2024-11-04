'use server'

import React from 'react'

import IconButton from '../button/IconButton'
import Image from 'next/image'
import SignoutModal from '../modal/SignoutModal'
import { iconsRelatedToBoth } from './icons'
import DeactivateModal from '../modal/DeactivateModal'

interface Props {
    icons: {
        svg: JSX.Element,
        text: string,
        to: string,
    }[],
}

const Aside = ({ icons }: Props) => {

    const getSignoutIcon = iconsRelatedToBoth[0]
    const getDeactiveIcon = iconsRelatedToBoth[1]

    return (
        <aside className='rounded border-hub-middlegray bg-hub-white shadow-lg fixed top-12 bottom-12 left-12 w-40 py-12 px-8'>
            <ul className='flex flex-col gap-6'>
                <li>
                    <Image src='/images/logo.png' alt='Logo do campus_hub' className='bg-hub-white' width={100} height={100} />
                </li>
                {icons.map((icon, index) => (
                    <li key={index}>
                        <IconButton icon={icon} />
                    </li>
                ))}
                <li>
                    <SignoutModal>{getSignoutIcon.svg} {getSignoutIcon.text}</SignoutModal>
                </li>
                <li>
                    <DeactivateModal>{getDeactiveIcon.svg} {getDeactiveIcon.text}</DeactivateModal>
                </li>
            </ul>
        </aside>
    )
}

export default Aside
