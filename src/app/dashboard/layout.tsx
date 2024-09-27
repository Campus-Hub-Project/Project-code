import React from 'react'
import Aside from './_components/Aside'
import { instituitionIcons } from './_components/Aside/icons'
import isAuthenticated from '@/lib/auth/isAuthenticated'
import { redirect } from 'next/navigation'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = async ({ children }: Props) => {

    const isAuth = await isAuthenticated()

    if (isAuth) {
        return (
            <>
                <Aside icons={instituitionIcons} />
                {children}
            </>
        )
    } else {
        redirect('/')
    }

}

export default DashboardLayout