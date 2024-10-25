'use server'
import EventCard from '@/components/shared/card/event-card'
import { getEventsWhereSubscribed } from '@/lib/events/getEventsWhereSubscribed'
import React from 'react'
import Image from 'next/image'

const DashboardPage = async () => {

  const events = await getEventsWhereSubscribed()

  if (events?.length === 0 || !events) {
    return (
      <div className='h-screen max-w-full flex flex-col items-center justify-center mx-12'>
        <Image src='/images/no-event-image.jpg' alt='' width={450} height={450} />
        <span className='text-center text-sm text-hub-middlegray'>Você não se inscreveu em nenhum evento ainda...</span>
      </div>
    )
  } else {
    return (
      <div>
        {events.map(event => (
          <EventCard event={event} />
        ))}
      </div>
    )
  }

}

export default DashboardPage
