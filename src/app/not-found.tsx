'use server'

import React from 'react'
import BasicLayout from '../components/shared/layouts/BasicLayout'
import { MiddleCard, MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '../components/shared/card/MiddleCard'
import ReturnButton from '../components/shared/button/ReturnButton'

const NotFoundPage = async () => {
    return (
        <BasicLayout>
            <MiddleCard>
                <MiddleCardHeader>
                    <MiddleCardTitle>404 - Conteúdo não encontrado</MiddleCardTitle>
                    <MiddleCardDescription>Você viajou para algum lugar que não existe...</MiddleCardDescription>
                </MiddleCardHeader>
                <MiddleCardContent>
                    <span className='font-medium text-lg text-center text-grays-three flex mx-auto items-center gap-1'>Clique aqui para
                        <ReturnButton> retorar</ReturnButton>
                    </span>
                </MiddleCardContent>
            </MiddleCard>
        </BasicLayout>
    )
}

export default NotFoundPage