'use server'

import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../../ui/card'

import { formatDateTime, formatFormat, formatType } from '@/src/actions/event-actions/format-event-data'
import { EventCardProps } from '@/src/interfaces/event'
import { auth } from '@/src/auth'
import SubscribeEventButton from '../button/SubscribeEventButton'
import RemoveFromEventButton from '../button/RemoveFromEventButton'

const EventCard = async ({ event, isDashboard = false }: EventCardProps) => {
  const session = await auth()
  const { role } = session!.user

  const formattedType = await formatType(event.type)
  const formattedFormat = await formatFormat(event.format)
  const formattedStarts = await formatDateTime(event.starts)
  const formattedEnds = await formatDateTime(event.ends)
  const formattedSubsStarts = await formatDateTime(event.subs_starts)
  const formattedSubsEnds = await formatDateTime(event.subs_ends)
  const formattedParticipantsCount = event.participants.length
  const formattedParticipantsLimit = event.participants_limit ? 0 : 'vagas ilimitadas'

  return (
    <Card className='w-full rounded border-none bg-hub-white shadow-lg h-[635px]'>
      <CardHeader>
        <CardTitle className='text-hub-blue uppercase text-xl'>{event.name}</CardTitle>
        <CardDescription className='text-hub-middlegray text-base'>{event.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col text-hub-middlegray'>
        <span>Tipo do evento: {formattedType}</span>
        <span>Formato do evento: {formattedFormat}</span>
        <span>Data de início: {formattedStarts}</span>
        <span>Data de encerramento: {formattedEnds}</span>
        <span>Período de inscrição: {formattedSubsStarts} até {formattedSubsEnds}</span>
        <span className='text-hub-blue font-semibold'>
          Total de participantes inscritos: {formattedParticipantsCount} de {formattedParticipantsLimit}
        </span>
      </CardContent>
      {role === 'USER' && isDashboard && (
        <CardFooter>
          <RemoveFromEventButton id={event.id}>Sair do evento</RemoveFromEventButton>
        </CardFooter>
      )}
      {role === 'USER' && !isDashboard && (
        <CardFooter>
          <SubscribeEventButton id={event.id}>Participar</SubscribeEventButton>
        </CardFooter>
      )}
    </Card>
  )
}

export default EventCard