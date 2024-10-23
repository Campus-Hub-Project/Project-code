import React from 'react'

import Aside from '../../../components/shared/aside'

import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/auth'

import {
    instituitionIcons,
    userIcons
} from '@/components/shared/aside/icons'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = async ({ children }: Props) => {

    const session = await auth()

    if (!session) redirect('/')

    let icons
    if (session.user?.role === 'instituition') icons = instituitionIcons
    if (session.user?.role === 'user') icons = userIcons
    else redirect('/')
    
    return (
        <>
            <Aside icons={icons} />
            {children}
        </>
    )
}

export default DashboardLayout

