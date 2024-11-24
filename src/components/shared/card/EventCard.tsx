'use client'
import React, { useState } from 'react'
import { EventToShowOnCard } from '@/src/interfaces/event'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/src/components/ui/card'
import { UserRole } from '@prisma/client'

const EventCard = ({ event, role }: { event: EventToShowOnCard, role: UserRole }) => {
    const [showMore, setShowMore] = useState(false)

    const handleTurnIntoAttendee = async () => console.log('CLICOU')
    return (
        <EventCardWrapper>
            <EventCardHeader>
                <EventCardTitle>{event.summary}</EventCardTitle>
                <EventCardAttendees>Participando: 1 de {event.attendeesLimit}</EventCardAttendees>
            </EventCardHeader>
            <EventCardText>{event.type} {event.format}</EventCardText>
            <div>
                {showMore ? (
                    <EventCardShowMoreContent
                        {...event} setShowMore={setShowMore} handleTurnIntoAttendee={handleTurnIntoAttendee} role={role}/>
                ) : (
                    <EventCardShowLessContent setShowMore={setShowMore} handleTurnIntoAttendee={handleTurnIntoAttendee} role={role} />
                )}
            </div>
        </EventCardWrapper>
    )
}

export default EventCard

const EventCardWrapper = ({ children }: { children: React.ReactNode }) =>
    <Card className='w-full h-fit border-2 border-grays-five bg-grays-seven rounded-sm p-4 shadow-none'>{children}</Card>

const EventCardHeader = ({ children }: { children: React.ReactNode }) =>
    <CardHeader className='p-0 flex flex-row justify-between'>{children}</CardHeader>

const EventCardTitle = ({ children }: { children: React.ReactNode }) =>
    <CardTitle className='text-left font-semibold text-2xl text-blues-three w-1/2'>{children}</CardTitle>

const EventCardAttendees = ({ children }: { children: React.ReactNode }) =>
    <span className='text-right font-normal text-sm text-grays-five w-1/2'>{children}</span>

const EventCardDescription = ({ children }: { children: React.ReactNode }) =>
    <span className='font-normal text-sm text-grays-five'>{children}</span>

const EventCardShowMoreContent = (
    { description, dayStarts, dayEnds, subsDayStarts, subsDayEnds, setShowMore, handleTurnIntoAttendee, role }:
        {
            description: string, dayStarts: string, dayEnds: string, subsDayStarts: string, subsDayEnds: string,
            setShowMore: React.Dispatch<React.SetStateAction<boolean>>, handleTurnIntoAttendee: any, role: UserRole
        }) =>
    <>
        <CardContent className='p-0 mt-4 flex flex-col gap-4'>
            <EventCardDescription>{description}</EventCardDescription>
            <EventCardDates>{dayStarts} até {dayEnds}</EventCardDates>
            <EventCardDates>Inscrições abertas de {subsDayStarts} até {subsDayEnds}</EventCardDates>
        </CardContent>
        <CardFooter className='p-0 mt-4 flex gap-2'>
            <button
                className='p-0 m-0 font-medium text-grays-two hover:border-b-2 hover:border-grays-one hover:text-grays-one'
                onClick={() => setShowMore(false)}>
                Ver menos
            </button>
            {role === UserRole.USER && (
                <button
                    className='p-0 m-0 font-medium text-blues-one hover:border-b-2 hover:border-blues-three hover:text-blues-three'
                    onClick={async () => await handleTurnIntoAttendee()}>
                    Participar
                </button>
            )}
        </CardFooter>
    </>

const EventCardShowLessContent = (
    { setShowMore, handleTurnIntoAttendee, role }
        : { setShowMore: React.Dispatch<React.SetStateAction<boolean>>, handleTurnIntoAttendee: any, role: UserRole }) =>
    <CardFooter className='p-0 mt-4 flex gap-2'>
        <button
            className='p-0 m-0 font-medium text-grays-two hover:border-b-2 hover:border-grays-one hover:text-grays-one'
            onClick={() => setShowMore(true)}>
            Ver mais
        </button>
        {role === UserRole.USER && (
            <button
                className='p-0 m-0 font-medium text-blues-one hover:border-b-2 hover:border-blues-three hover:text-blues-three'
                onClick={async () => await handleTurnIntoAttendee()}>
                Participar
            </button>
        )}
    </CardFooter>


const EventCardDates = ({ children }: { children: React.ReactNode }) =>
    <span className='text-sm text-blues-five'>{children}</span>

const EventCardText = ({ children }: { children: React.ReactNode }) =>
    <CardDescription className='p-0 uppercase font-medium text-base text-grays-four'>{children}</CardDescription>
