'use server'

import { getEventsCreatedByUser } from '@/src/actions/event-actions/getEventsCreatedByUser'
import { getEventsUserIsParticipatingAction } from '@/src/actions/event-actions/getEventsUserIsParticipatingAction'
import { auth } from '@/src/auth'
import DashboardCard from '@/src/components/shared/card/DashboardCard'
import DashboardEventsLayout from '@/src/components/shared/layouts/DashboardEventsLayout'
import NoEventsLayout from '@/src/components/shared/layouts/NoEventsLayout'
import React from 'react'

const DashboardPage = async () => {
  const session = await auth()

  if (session!.user.role === 'INSTITUITION') {
    const eventsCreatedByUser = await getEventsCreatedByUser()

    if (eventsCreatedByUser === null || eventsCreatedByUser.length === 0) {
      return (
        <NoEventsLayout
          src='/images/no-event-image.jpg'
          alt='Imagem alternativa caso não hajam eventos para mostrar'
          span='Você não criou em nenhum evento ainda...'
        />
      )
    }

    return (
      <DashboardEventsLayout>
        {eventsCreatedByUser.map(event => (
          <DashboardCard key={event.id} event={event} />
        ))}
      </DashboardEventsLayout>
    )
  }

  if (session!.user.role === 'USER') {
    const eventsUserIsParticipating = await getEventsUserIsParticipatingAction()

    if (eventsUserIsParticipating === null || eventsUserIsParticipating.length === 0) {
      return (
        <NoEventsLayout
          src='/images/no-event-image.jpg'
          alt='Imagem alternativa caso não hajam eventos para mostrar'
          span='Você não está participando de nenhum evento ainda...'
        />
      )
    }

    return (
      <DashboardEventsLayout>
        {eventsUserIsParticipating.map(event => (
          <DashboardCard key={event.id} event={event} />
        ))}
      </DashboardEventsLayout>
    )
  }
}

export default DashboardPage
