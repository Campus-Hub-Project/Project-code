'use server'

import { getDashboardEvents } from '@/src/actions/event-actions/getDashboardEvents'
import { auth } from '@/src/auth'
import EventCard from '@/src/components/shared/card/EventCard'
import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'
import { UserRole } from '@prisma/client'

import React from 'react'

const DashboradPage = async () => {
  const session = await auth()
  const events = await getDashboardEvents({ role: session?.user.role as UserRole })

  return (
    <>
      <MiddleCardHeader>
        <MiddleCardTitle>Dashboard</MiddleCardTitle>
        <MiddleCardDescription>
          Aqui você pode ver os eventos que criou
        </MiddleCardDescription>
      </MiddleCardHeader>
      <MiddleCardContent>
        {(!events || events.length === 0) ?
          (<Content>Sem eventos no momento...</Content>) :
          (events.map((event, index) => (<EventCard event={event} key={index} />)))}
      </MiddleCardContent>
    </>
  )
}

export default DashboradPage

const Content = async ({ children }: { children: React.ReactNode }) =>
  <span className='text-center text-3xl text-grays-four font-semibold lg:mt-48'>{children}</span>

