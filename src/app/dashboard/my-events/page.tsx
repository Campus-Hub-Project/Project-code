import { getEventsCreated } from '@/lib/events/eventsCreated'
import React from 'react'
import EventCard from './_components/event-card'

const EventsCreatedPage = async () => {

  const events = await getEventsCreated()

  if (!events) {
    return <div className='text-black text-7xl'>Você ainda não criou nenhum evento</div>
  }

  return (
    <div>
      {events.map(e => (
        <EventCard event={e} key={e.id} />
      ))}
    </div>
  )
}

export default EventsCreatedPage
