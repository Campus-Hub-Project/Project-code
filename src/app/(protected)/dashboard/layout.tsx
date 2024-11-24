'use server'

import { auth } from '@/src/auth'
import Aside from '@/src/components/shared/aside/Aside'

import { MiddleCard } from '@/src/components/shared/card/MiddleCard'
import BasicLayout from '@/src/components/shared/layouts/BasicLayout'
import React from 'react'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()
    const role = session!.user.role

    return (
        <BasicLayout>
            <Aside role={role} />
            <MiddleCard>
                {children}
            </MiddleCard>
        </BasicLayout>
    )


}

export default DashboardLayout