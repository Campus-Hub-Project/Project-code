import React from 'react'
import Aside from './_components/Aside'
import { instituitionIcons, userIcons } from './_components/Aside/icons'
import isAuthenticated from '@/lib/auth/isAuthenticated'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/auth'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = async ({ children }: Props) => {

    const isAuth = await isAuthenticated()
    const session = await auth()


    if (session?.user?.role === "instituition") {
        console.log(session.user.role);
        
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