import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

import btCss from '@/styles/Button.module.css'
import { auth } from '@/lib/auth/auth'

interface Props {
    event: {
        name: string,
        description: string,
        eventType: string,
        eventFormat: string,
        eventDayTo: Date,
        eventDayFrom: Date,
        applicationPeriodTo: Date,
        applicationPeriodFrom: Date,
        eventTime: string,
        eventValue: number,
        eventLimit: number,
    }
}

const EventCard = async ({ event }: Props) => {

    const session = await auth()

    const formatedEventType = event.eventType === 'lectures' ? 'Palestra'
        : event.eventType === 'workshop' ? 'Workshop'
            : event.eventType === 'bootcamp' ? 'Bootcamp'
                : event.eventType === 'conference' ? 'Conferência'
                    : event.eventType === 'congress' ? 'Congresso' : 'Outro'

    const formatedEventFormat = event.eventFormat === 'inperson' ? 'Presencial'
        : event.eventFormat === 'online' ? 'Online' : 'Híbrido'

    const formatedEventDayTo = event.eventDayTo.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatedEventDayFrom = event.eventDayFrom.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatedEventApplicationTo = event.applicationPeriodTo.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatedEventApplicationFrom = event.applicationPeriodFrom.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const formatedEventValue = event.eventValue === 0 ? 'Gratuito' : `R$ ${event.eventValue}`

    const formatedEventLimit = event.eventLimit === 0 ? 'Não há limite de participantes' : `${event.eventLimit} vagas`

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
                    <span>Data do evento: {formatedEventDayTo} até {formatedEventDayFrom}</span>
                    <span>Horário: {event.eventTime}</span>
                    <span>Período de inscrição: {formatedEventApplicationTo} até {formatedEventApplicationFrom}</span>
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
