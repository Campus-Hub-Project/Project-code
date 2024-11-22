'use server'

import EventCard from '@/src/components/shared/card/EventCard'
import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'

import React from 'react'

const DashboradPage = async () => {

  return (
    <>
      <MiddleCardHeader>
        <MiddleCardTitle>Dashboard</MiddleCardTitle>
        <MiddleCardDescription>
          Aqui você pode ver os eventos que criou
        </MiddleCardDescription>
      </MiddleCardHeader>
      <MiddleCardContent>
        {/* {content != null ? <Content>{content}</Content> : <Content>Sem conteúdo no momento...</Content>} */}
        <EventCard />
      </MiddleCardContent>
    </>
  )
}

export default DashboradPage

const Content = async ({ children }: { children: React.ReactNode }) =>
  <span className='text-center text-3xl text-grays-four font-semibold lg:mt-48'>{children}</span>

