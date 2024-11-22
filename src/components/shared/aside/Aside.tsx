'use server'

import React from 'react'

import {
    IconLayoutDashboard, IconUser, IconBook2, IconCertificate,
    IconBellExclamation, IconSchool, IconBackpack, IconFlask, IconLogout2, IconTrash, IconMapPin
} from '@tabler/icons-react'
import IconButton from '../button/IconButton'
import { AlertModal, AlertModalTrigger } from '../modal/AlertModal'

const icons = [
    { to: '', icon: <IconLayoutDashboard />, text: 'Dashboard' },
    { to: '/dashboard/new-event', icon: <IconFlask />, text: 'Novo evento' },
    // { to: '', icon: <IconMapPin />, text: 'Buscar eventos' },
    { to: '', icon: <IconLogout2 />, text: 'Sair' },
    { to: '', icon: <IconTrash />, text: 'Deletar conta' },
]

const Aside = async () => {

    return (
        <aside className='w-[260px] border-2 border-grays-five bg-grays-seven fixed top-0 bottom-0 left-0 flex flex-col pl-4'>
            <h3 className='font-bold text-lg text-blues-three mt-4'>Painel de controle</h3>
            <ul>
                {icons.map((icon, index) => (
                    <li key={index}>
                        <IconButton to={icon.to}>{icon.icon} {icon.text} </IconButton>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Aside
