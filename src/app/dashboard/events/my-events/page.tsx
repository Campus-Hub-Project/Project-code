import getEventsCreatedByInstituition from '@/lib/events/eventsCreatedByInstituition'
import React from 'react'
import EventCard from '../_components/event-card'

const EventsCreatedPage = async () => {

  const events = await getEventsCreatedByInstituition()

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
