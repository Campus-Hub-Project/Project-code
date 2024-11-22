'use server'

import Aside from '@/src/components/shared/aside/Aside'

import { MiddleCard } from '@/src/components/shared/card/MiddleCard'
import BasicLayout from '@/src/components/shared/layouts/BasicLayout'
import React from 'react'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <BasicLayout>
            <Aside />
            <MiddleCard>
                {children}
            </MiddleCard>
        </BasicLayout>
    )


}

export default DashboardLayout