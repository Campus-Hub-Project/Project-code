'use client'
import React, { useState, memo } from 'react'
import { EventToShowOnCard, RegularEventData } from '@/src/interfaces/event'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/src/components/ui/card'
import { UserRole } from '@prisma/client'

import { IconUsers } from '@tabler/icons-react'
import EventCardButton from '../button/EventCardButton'
import { addStudentParticipation } from '@/src/actions/user-event-participation-action'

const EventCard = ({ event, role }: { event: EventToShowOnCard, role: UserRole }) => {
    const [showMore, setShowMore] = useState(false)

    const handleTurnIntoAttendee = async () => await addStudentParticipation({ eventID: event.id })

    return (
        <EventCardWrapper>
            <EventCardHeader>
                <EventCardTitle>{event.summary}</EventCardTitle>
                <EventCardAttendees>{event.atendees} de {event.attendeesLimit}</EventCardAttendees>
            </EventCardHeader>
            <EventCardText>{event.type} {event.format}</EventCardText>
            <div>
                {showMore ? (
                    <EventCardShowMoreContent
                        {...event} setShowMore={setShowMore} handleTurnIntoAttendee={handleTurnIntoAttendee}
                        role={role} />
                ) : (
                    <EventCardShowLessContent setShowMore={setShowMore} handleTurnIntoAttendee={handleTurnIntoAttendee} role={role} />
                )}
            </div>
        </EventCardWrapper>
    )
}

export default EventCard

const EventCardWrapper = ({ children }: { children: React.ReactNode }) =>
    <Card className='w-full h-fit border-2 border-grays-five bg-grays-seven rounded-sm p-4 shadow-none mb-8'>{children}</Card>

const EventCardHeader = ({ children }: { children: React.ReactNode }) =>
    <CardHeader className='p-0 flex flex-row justify-between items-center'>{children}</CardHeader>

const EventCardTitle = ({ children }: { children: React.ReactNode }) =>
    <CardTitle className='text-left font-semibold text-2xl text-blues-three w-3/4'>{children}</CardTitle>

const EventCardAttendees = ({ children }: { children: React.ReactNode }) =>
    <span className='h-fit pb-2 flex items-center justify-end text-right font-normal text-sm text-grays-five gap-1 w-1/4'>
        <IconUsers className="w-4 h-4" />{children} </span>

const EventCardDescription = ({ children }: { children: React.ReactNode }) =>
    <span className='font-normal text-sm text-grays-five'>{children}</span>

const EventCardShowMoreContent = memo(({
    description, dayStarts, dayEnds, subsDayStarts, subsDayEnds, setShowMore, handleTurnIntoAttendee, role }: {
        description: string;
        dayStarts: string;
        dayEnds: string;
        subsDayStarts: string;
        subsDayEnds: string;
        setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
        handleTurnIntoAttendee: () => Promise<RegularEventData | null | undefined>,
        role: UserRole
    }) => (
    <>
        <CardContent className="p-0 mt-4 flex flex-col gap-4">
            <EventCardDescription>{description}</EventCardDescription>
            <EventCardDates>{dayStarts} até {dayEnds}</EventCardDates>
            <EventCardDates>Inscrições abertas de {subsDayStarts} até {subsDayEnds}</EventCardDates>
        </CardContent>
        <CardFooter className="p-0 mt-4 flex gap-2">
            <EventCardButton
                onClick={() => setShowMore(false)}
                text="Ver menos"
                className="text-grays-two hover:border-grays-one hover:text-grays-one"
            />
            {role === UserRole.USER && (
                <EventCardButton
                    onClick={async () => await handleTurnIntoAttendee()}
                    text="Participar"
                    className="text-blues-one hover:border-blues-three hover:text-blues-three"
                />
            )}
        </CardFooter>
    </>
))

const EventCardShowLessContent = memo(({ setShowMore, handleTurnIntoAttendee, role }: {
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
    handleTurnIntoAttendee: () => Promise<RegularEventData | null | undefined>,
    role: UserRole;
}) => (
    <CardFooter className="p-0 mt-4 flex gap-2">
        <EventCardButton
            onClick={() => setShowMore(true)}
            text="Ver mais"
            className="text-grays-two hover:border-grays-one hover:text-grays-one"
        />
        {role === UserRole.USER && (
            <EventCardButton
                onClick={async () => await handleTurnIntoAttendee()}
                text="Participar"
                className="text-blues-one hover:border-blues-three hover:text-blues-three"
            />
        )}

    </CardFooter>
))

const EventCardDates = ({ children }: { children: React.ReactNode }) =>
    <span className='text-sm text-blues-five'>{children}</span>

const EventCardText = ({ children }: { children: React.ReactNode }) =>
    <CardDescription className='p-0 uppercase font-medium text-base text-grays-four'>{children}</CardDescription>
