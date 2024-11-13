'use server'
import { auth } from '@/src/auth'
import Aside from '@/src/components/shared/aside/Aside'
import {
    iconsRelatedToInstituition,
    iconsRelatedToRegularUser
} from '@/src/components/shared/aside/icons'
import React from 'react'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()
    const { role } = session!.user

    if (role === 'INSTITUITION')
        return (
            <>
                <Aside icons={iconsRelatedToInstituition} />
                {children}
            </>
        )


    if (role === 'USER')
        return (
            <>
                <Aside icons={iconsRelatedToRegularUser} />
                {children}
            </>
        )


}

export default DashboardLayout