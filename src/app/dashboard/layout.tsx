import React from 'react'
import Aside from '../../../components/shared/aside'
import { instituitionIcons, userIcons } from './_components/Aside/icons'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/auth'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = async ({ children }: Props) => {

    const session = await auth()

    if (session?.user?.role === "instituition") {
        return (
            <>
                <Aside icons={instituitionIcons} />
                {children}
            </>
        )
    } else if (session?.user?.role === 'user') {
        return (
            <>
                <Aside icons={userIcons}/>
                {children}
            </>
        )
    } else {
        redirect('/')
    }
}

export default DashboardLayout