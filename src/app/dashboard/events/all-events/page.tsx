import { allEventsCreated } from '@/lib/events/allEvents'
import React from 'react'
import EventCard from '../_components/event-card'

const AllEventsPage = async () => {
    const events = await allEventsCreated()

    if (events?.length === 0 || !events) {
        return (
            <p>Não há eventos para serem mostrados no momento</p>
        )
    }

    return (
        <div>
            {events.map(e => (
                <EventCard event={e} />
            ))}
        </div>
    )
}

export default AllEventsPage