'use server'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import React from 'react'

import {
    formatDateTime,
    formatFormat,
    formatLimit,
    formatPrice,
    formatTotalParticipants,
    formatType
} from './format-event-data'

import { auth } from '@/src/auth'
import SubscribeEventButton from '../button/SubscribeEventButton'

import { EventWithParticipantsAsProps } from './event'

import crdCss from '@/styles/Card.module.css'

const EventCard = async ({ event }: EventWithParticipantsAsProps) => {

    const session = await auth()

    return (
        <section className='min-h-screen w-full bg-hub-white flex justify-center'>
            <Card className='bg-hub-white border shadow-md rounded w-3/5 my-12 text-hub-middlegray'>
                <CardHeader>
                    <CardTitle className={`${crdCss['card-title']} uppercase`}>{event.name}</CardTitle>
                    <CardDescription className='font-medium text-base'>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col'>
                    <span>
                        Tipo do evento: {formatType(event.type)}
                    </span>
                    <span>
                        Formato: {formatFormat(event.format)}
                    </span>
                    <span>
                        Data do evento: {formatDateTime(event.starts)} até {formatDateTime(event.ends)}
                    </span>
                    <span>
                        Período de inscrição: {formatDateTime(event.subs_starts)} até {formatDateTime(event.subs_ends)}
                    </span>
                    <span>
                        Valor da inscrição: {formatPrice(event.price)}
                    </span>
                    <span>
                        Limite de participantes: {formatLimit(event.participants_limit)}
                    </span>
                    <span className='text-hub-blue font-semibold'>
                        Atualmente inscritos: {formatTotalParticipants(event.participants)}
                    </span>
                </CardContent>
                <CardFooter className='absolute bottom-12'>
                    {session?.user?.role === 'user' && (
                        <SubscribeEventButton id={event.id}>Se inscrever</SubscribeEventButton>
                    )}
                </CardFooter>
            </Card>
        </section>
    )
}

export default EventCard

