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
  const { role } = session!.user

  const getEvents = async () => {
    if (role === 'INSTITUITION')
      return {
        events: await getEventsCreatedByUser(),
        noEventText: 'Você não criou em nenhum evento ainda...'
      }

    if (role === 'USER')
      return {
        events: await getEventsUserIsParticipatingAction(),
        noEventText: 'Você não está participando de nenhum evento ainda...'
      }

    return { events: [], noEventText: '' }
  }

  const { events, noEventText } = await getEvents()

  if (events === null || events.length === 0)
    return <NoEventsLayout
      src='/images/no-event-image.jpg'
      alt='Imagem alternativa caso não hajam eventos para mostrar'
      span={noEventText}
    />

  return <DashboardEventsLayout>
    {events.map(event => (
      <DashboardCard key={event.id} event={event} />
    ))}
  </DashboardEventsLayout>
}

export default DashboardPage
