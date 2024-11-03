'use server'
import { getAllPlataformEventsAction } from '@/src/actions/event-actions/getAllPlataformEventsAction'
import DashboardCard from '@/src/components/shared/card/DashboardCard'
import DashboardEventsLayout from '@/src/components/shared/layouts/DashboardEventsLayout'
import NoEventsLayout from '@/src/components/shared/layouts/NoEventsLayout'
import React from 'react'

const FindEventsPage = async () => {

    const events = await getAllPlataformEventsAction()

    if (events === null || events.length === 0) {
        return (
            <NoEventsLayout
                src='/images/no-event-image.jpg'
                alt='Imagem alternativa caso não hajam eventos para mostrar'
                span='Não há nenhum evento para ser mostrado ainda...'
            />
        )
    }

    return (
        <DashboardEventsLayout>
            {events.map((event) => (
                <DashboardCard event={event} />
            ))}
        </DashboardEventsLayout>
    )


}

export default FindEventsPage