import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import React from 'react'

import { User } from 'next-auth'
import {
    formatDateTime,
    formatFormat,
    formatLimit,
    formatPrice,
    formatTotalParticipants,
    formatType
} from './format-event-data'

import { auth } from '@/lib/auth/auth'
import SubscribeEvent from '../modal/SubscribeEvent'

interface Props {
    event: {
        id: string
        name: string,
        description: string,
        type: string,
        format: string,
        starts: Date,
        ends: Date,
        subs_starts: Date,
        subs_ends: Date,
        price: number,
        participants_limit: number,
        participants: User[]
    },
}

const EventCard = async ({ event }: Props) => {

    const session = await auth()

    return (
        <section className='min-h-screen w-full bg-hub-white flex justify-center'>
            <Card className='bg-hub-white border shadow-md rounded w-3/5 my-12 text-hub-middlegray'>
                <CardHeader>
                    <CardTitle className='text-3xl font-semibold text-hub-blue uppercase'>{event.name}</CardTitle>
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
                        <SubscribeEvent id={event.id}>Se inscrever</SubscribeEvent>
                    )}
                </CardFooter>
            </Card>
        </section>
    )
}

export default EventCard
