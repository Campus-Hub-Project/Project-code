'use client'
import React, { useState } from 'react'
import { EventToShowOnCard } from '@/src/interfaces/event'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/src/components/ui/card'
const EventCard = ({ event }: { event: EventToShowOnCard }) => {
    const [showMore, setShowMore] = useState(false)

    return (
        <Card className='w-full h-fit border-2 border-grays-five bg-grays-seven rounded-sm p-4 shadow-none'>
            <CardHeader className='p-0 flex flex-row justify-between'>
                <CardTitle className='text-left font-semibold text-2xl text-blues-three w-1/2'>{event.summary}</CardTitle>
                <span className='text-right font-normal text-sm text-grays-five w-1/2'>Participando: 1 de {event.attendeesLimit}</span>
            </CardHeader>
            <CardDescription className='p-0 uppercase font-medium text-base text-grays-four'>
                {event.type} {event.format}
            </CardDescription>
            <div>
                {showMore ? (
                    <>
                        <CardContent className='p-0 mt-4 flex flex-col gap-4'>
                            <EventCardText>{event.description}</EventCardText>
                            <EventCardDates>{event.dayStarts} até {event.dayEnds}</EventCardDates>
                            <EventCardDates>Inscrições abertas de {event.subsDayStarts} até {event.subsDayEnds}</EventCardDates>
                        </CardContent>
                        <CardFooter className='p-0 mt-4'>
                            <button
                                className='p-0 m-0 font-medium text-grays-two hover:border-b-2 hover:border-grays-one hover:text-grays-one'
                                onClick={() => setShowMore(false)}>
                                Ver menos
                            </button>
                        </CardFooter>
                    </>
                ) : <CardFooter className='p-0 mt-4'>
                    <button
                        className='p-0 m-0 font-medium text-grays-two hover:border-b-2 hover:border-grays-one hover:text-grays-one'
                        onClick={() => setShowMore(true)}>
                        Ver mais
                    </button>
                </CardFooter>}
            </div>
        </Card>
    )
}

export default EventCard

const EventCardDates = ({ children }: { children: React.ReactNode }) =>
    <span className='text-sm text-blues-five'>{children}</span>


const EventCardText = ({ children }: { children: React.ReactNode }) =>
    <p className='text-grays-three text-base font-normal'>{children}</p>