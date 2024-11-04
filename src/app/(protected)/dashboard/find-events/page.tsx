'use server'
import { getAllPlataformEventsAction } from '@/src/actions/event-actions/getAllPlataformEventsAction'
import EventCard from '@/src/components/shared/card/EventCard'
import DashboardEventsLayout from '@/src/components/shared/layouts/DashboardEventsLayout'
import NoContentLayout from '@/src/components/shared/layouts/NoContentLayout'
import React from 'react'

const FindEventsPage = async () => {

    const events = await getAllPlataformEventsAction()

    if (events === null || events.length === 0) {
        return (
            <NoContentLayout
                src='/images/no-event-image.jpg'
                alt='Imagem alternativa caso não hajam eventos para mostrar'
                span='Não há nenhum evento para ser mostrado ainda...'
            />
        )
    }

    return (
        <DashboardEventsLayout>
            {events.map((event) => (
                <EventCard event={event} />
            ))}
        </DashboardEventsLayout>
    )


}

export default FindEventsPage