'use server'

import { MiddleCard, MiddleCardFooter } from '@/src/components/shared/card/MiddleCard'
import BasicLayout from '@/src/components/shared/layouts/BasicLayout'
import { IconBrandGoogleFilled } from '@tabler/icons-react'

import React from 'react'
import ProviderButton from '@/src/components/shared/button/ProviderButton'


const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <BasicLayout>
            <MiddleCard>
                {children}
                <MiddleCardFooter>
                    <span className='lg:text-sm font-normal text-grays-four'>é aluno? Entre com...</span>
                    <ProviderButton><IconBrandGoogleFilled />Google</ProviderButton>
                </MiddleCardFooter>
            </MiddleCard>
        </BasicLayout>
    )
}

export default AuthLayout