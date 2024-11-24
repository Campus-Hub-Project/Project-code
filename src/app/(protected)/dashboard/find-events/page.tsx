'use server'
import { getAllEvents } from '@/src/actions/event-actions/getAllEvents'
import React from 'react'
import {
    MiddleCardContent,
    MiddleCardDescription,
    MiddleCardHeader,
    MiddleCardTitle
} from '@/src/components/shared/card/MiddleCard'

import { NoEventsText } from '@/src/components/shared/text/Text'

import EventCard from '@/src/components/shared/card/EventCard'
import { auth } from '@/src/auth'

const FindEventsPage = async () => {
    const session = await auth()
    const events = await getAllEvents()

    return (
        <>
            <MiddleCardHeader>
                <MiddleCardTitle>Buscar eventos</MiddleCardTitle>
                <MiddleCardDescription>
                    Aqui você pode buscar e participar dos eventos das faculdades e universidades
                </MiddleCardDescription>
            </MiddleCardHeader>
            <MiddleCardContent>
                {(!events || events.length === 0) ?
                    (
                        <NoEventsText>Sem eventos no momento...</NoEventsText>
                    ) :
                    (events.map((event, index) => (
                        <EventCard event={event} key={index} role={session!.user.role} />
                    )))}
            </MiddleCardContent>
        </>
    )
}

export default FindEventsPage