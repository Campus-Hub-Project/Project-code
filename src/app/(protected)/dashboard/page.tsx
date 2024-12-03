'use server'

import { getDashboardEvents } from '@/src/actions/event-actions/getDashboardEvents'
import { auth } from '@/src/auth'
import EventCard from '@/src/components/shared/card/EventCard'
import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'
import { UserRole } from '@prisma/client'

import { NoEventsText } from '@/src/components/shared/text/Text'

import React from 'react'

const DashboradPage = async () => {
  const session = await auth()
  const role = session?.user.role as UserRole
  const events = await getDashboardEvents({ role })

  return (
    <>
      <MiddleCardHeader>
        <MiddleCardTitle>Dashboard</MiddleCardTitle>
        <MiddleCardDescription>
          {session!.user.role === UserRole.INSTITUITION ? <>Aqui você pode ver os eventos que criou</>
            : session!.user.role === UserRole.USER ? <>Aqui você pode ver os eventos que está participando</>
              : <>Página de dashboard</>}
        </MiddleCardDescription>
      </MiddleCardHeader>
      <MiddleCardContent>
        {(!events || events.length === 0) ?
          (
            <NoEventsText>Sem eventos no momento...</NoEventsText>
          ) :
          (events.map((event, index) => (
            <EventCard event={event} key={index} role={session!.user.role} isDashboard={true}/>
          )))}
      </MiddleCardContent>
    </>
  )
}

export default DashboradPage


