'use server'

import React from 'react'

import {
    IconLayoutDashboard, IconUser, IconBook2, IconCertificate,
    IconBellExclamation, IconSchool, IconBackpack, IconFlask, IconLogout2, IconTrash, IconMapPin
} from '@tabler/icons-react'
import { IconButton, IconLinkButton } from '../button/IconButton'

const icons = [
    { to: '/dashboard', icon: <IconLayoutDashboard />, text: 'Dashboard' },
    { to: '/dashboard/new-event', icon: <IconFlask />, text: 'Novo evento' },
    { to: '/dashboard/my-account/signout', icon: <IconLogout2 />, text: 'Sair' },
    { to: '/dashboard/my-account/delete-account', icon: <IconTrash />, text: 'Deletar conta' }
    // { to: '', icon: <IconMapPin />, text: 'Buscar eventos' },
]

const Aside = async () => {

    return (
        <aside className='w-[260px] border-2 border-grays-five bg-grays-seven fixed top-0 bottom-0 left-0 flex flex-col pl-4'>
            <h3 className='font-bold text-lg text-blues-three mt-4'>Painel de controle</h3>
            <ul>
                {icons.map((icon, index) => (
                    <li key={index}>
                        <IconLinkButton to={icon.to}>{icon.icon} {icon.text} </IconLinkButton>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Aside
