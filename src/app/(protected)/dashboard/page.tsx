'use server'

import { getEventsCreatedByUser } from '@/src/actions/event-actions/getEventsCreatedByUser'
import DashboardCard from '@/src/components/shared/card/DashboardCard'
import Image from 'next/image'
import React from 'react'

const DashboardPage = async () => {

  const events = await getEventsCreatedByUser()
  
  if (events === null || events.length === 0) {
    return (
      <div className='w-4/5 h-full py-12 ml-36 flex gap-8 justify-center items-center'>
        <div className='h-1/2 w-1/3 flex flex-col items-center justify-center'>
          <Image
            src='/images/no-event-image.jpg'
            alt='Imagem alternativa caso não hajam eventos para mostrar'
            width={425} height={400} />
          <span className='text-center text-sm text-hub-middlegray'>
            Você não criou em nenhum evento ainda...
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className='w-4/5 h-full py-12 ml-36 flex gap-8 justify-center items-center'>
      {events.map(event => (
        <DashboardCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default DashboardPage
