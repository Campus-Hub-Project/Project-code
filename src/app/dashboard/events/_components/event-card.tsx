import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import React from 'react'

import { auth } from '@/lib/auth/auth'

import btCss from '@/styles/Button.module.css'

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
        price: number,
        participants_limit: number,
    },
}

const EventCard = async ({ event }: Props) => {

    const session = await auth()

    const formatedEventType = event.type === 'lectures' ? 'Palestra'
        : event.type === 'workshop' ? 'Workshop'
            : event.type === 'bootcamp' ? 'Bootcamp'
                : event.type === 'conference' ? 'Conferência'
                    : event.type === 'congress' ? 'Congresso' : 'Outro'

    const formatedEventFormat = event.format === 'inperson' ? 'Presencial'
        : event.format === 'online' ? 'Online' : 'Híbrido'

    const formatedDateStarts = event.starts.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeStyle: 'long'
    })

    const formatedDateEnds = event.ends.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeStyle: 'long'
    })

    const formatedSubStarts = event.subs_starts.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatedSubEnds = event.subs_ends.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatedEventValue = event.price === 0 ? 'Gratuito' : `R$ ${event.price}`

    const formatedEventLimit = event.participants_limit === 0 ? 'Não há limite de participantes' : `${event.participants_limit} vagas`

    return (
        <section className='min-h-screen w-full bg-hub-white flex justify-center'>
            <Card className='bg-hub-white border shadow-md rounded w-3/5 my-12 text-hub-middlegray'>
                <CardHeader>
                    <CardTitle className='text-3xl font-semibold text-hub-blue uppercase'>{event.name}</CardTitle>
                    <CardDescription className='font-medium text-base'>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col'>
                    <span>Tipo do evento: {formatedEventType}</span>
                    <span>Formato: {formatedEventFormat}</span>
                    <span>Data do evento: {formatedDateStarts} até {formatedDateEnds}</span>
                    <span>Período de inscrição: {formatedSubStarts} até {formatedSubEnds}</span>
                    <span>Valor da inscrição: {formatedEventValue}</span>
                    <span>Limite de participantes: {formatedEventLimit}</span>
                </CardContent>
                <CardFooter className='relative top-72'>
                    {session?.user?.role === 'user' ? (
                        <Button className={`${btCss['basic-button-config']} relative bottom-6`}>Se inscrever</Button>
                    ) : null}
                </CardFooter>
            </Card>
        </section>
    )
}

export default EventCard
