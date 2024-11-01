'use server'
import { auth } from '@/src/auth'
import Aside from '@/src/components/shared/aside/Aside'
import { iconsRelatedToInstituition } from '@/src/components/shared/aside/icons'
import React from 'react'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    const session = await auth()

    if (session?.user.role === 'INSTITUITION') {
        return (
            <>
                <Aside icons={iconsRelatedToInstituition} />
                {children}
            </>
        )
    }

    if (session?.user.role === 'USER') {
        return (
            <>
                <Aside icons={iconsRelatedToInstituition} />
                {children}
            </>
        )
    }

}

export default DashboardLayout