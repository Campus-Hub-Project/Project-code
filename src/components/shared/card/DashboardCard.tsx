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

interface Props {
  event: {
    name: string,
    description: string,
    type: string,
    format: string,
    starts: Date,
    ends: Date,
    subs_starts: Date,
    subs_ends: Date,
    participants_limit: number
  }
}

const DashboardCard = async ({ event }: Props) => {
  return (
    <Card className='w-2/5 rounded border-none bg-hub-white shadow-lg'>
      <CardHeader>
        <CardTitle className='text-hub-blue uppercase text-xl'>
          {event.name}
        </CardTitle>
        <CardDescription className='text-hub-middlegray text-base'>
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col text-hub-middlegray'>
        <span>Tipo do evento: {event.type}</span>
        <span>Formato do evento: {event.format}</span>
        <span>Data de início: {event.starts as unknown as string}</span>
        <span>Data de encerramento: {event.ends as unknown as string}</span>
        <span>Período de inscrição: {event.subs_starts as unknown as string} até {event.subs_ends as unknown as string}</span>
        <span>Total de participantes inscritos: {event.participants_limit} de 100</span>
      </CardContent>
      {/* <CardFooter>
        <Button className={buttonCss['basic']}>Ver mais detalhes</Button>
      </CardFooter> */}
    </Card>
  )
}

export default DashboardCard