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

import buttonCss from '@/styles/Button.module.css'
import { Button } from '../../ui/button'
import { formatDateTime, formatFormat, formatTotalParticipants, formatType } from '@/src/actions/event-actions/format-event-data'
import { EventCardProps } from '@/src/interfaces/event'
import { auth } from '@/src/auth'

const DashboardCard = async ({ event }: EventCardProps) => {
  const session = await auth()

  const formattedType = await formatType(event.type)

  const formattedFormat = await formatFormat(event.format)

  const formattedStarts = await formatDateTime(event.starts)

  const formattedEnds = await formatDateTime(event.ends)

  const formattedSubsStarts = await formatDateTime(event.subs_starts)

  const formattedSubsEnds = await formatDateTime(event.subs_ends)

  // const formattedParticipantsLimit = await formatTotalParticipants(event.participants_limit)

  return (
    <Card className='w-full rounded border-none bg-hub-white shadow-lg h-[635px]'>
      <CardHeader>
        <CardTitle className='text-hub-blue uppercase text-xl'>
          {event.name}
        </CardTitle>
        <CardDescription className='text-hub-middlegray text-base'>
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col text-hub-middlegray'>
        <span>Tipo do evento: {formattedType}</span>
        <span>Formato do evento: {formattedFormat}</span>
        <span>Data de início: {formattedStarts}</span>
        <span>Data de encerramento: {formattedEnds}</span>
        <span>Período de inscrição: {formattedSubsStarts} até {formattedSubsEnds}</span>
        <span className='text-hub-blue font-semibold'>Total de participantes inscritos: {event.participants_limit} de 100</span>
      </CardContent>
      {session?.user.role === 'USER' && (
        <CardFooter>
          <Button className={buttonCss['basic']}>Ver mais detalhes</Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default DashboardCard