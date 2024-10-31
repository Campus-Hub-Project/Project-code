'use server'


import React from 'react'

const DashboardPage = async () => {
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage
// import React from 'react'
// import Image from 'next/image'

// import EventCard from '@/components/shared/card/event-card'
// import { getEventsWhereSubscribed } from '@/lib/events/getEventsWhereSubscribed'
// import { auth } from '@/src/auth'
// import getEventsWhereInstituitionCreated from '@/lib/events/getEventsWhereInstituitionCreated'

// const DashboardPage = async () => {

//   const session = await auth()

  // if (session?.user?.role === 'user') {
  //   const events = await getEventsWhereSubscribed()
  //   if (events?.length === 0 || !events) {
  //     return (
  //       <div className='h-screen max-w-full flex flex-col items-center justify-center mx-12'>
  //         <Image
  //           src='/images/no-event-image.jpg'
  //           alt='Imagem alternativa caso não hajam eventos para mostrar'
  //           width={450} height={450} />
  //         <span className='text-center text-sm text-hub-middlegray'>
  //           Você não se inscreveu em nenhum evento ainda...
  //         </span>
  //       </div>
  //     )
  //   }

  //   return (
  //     <div>
  //       {events.map(event => (
  //         <EventCard event={event} />
  //       ))}
  //     </div>
  //   )
  // } else if (session?.user?.role === 'instituition') {
  //   const events = await getEventsWhereInstituitionCreated()

  //   if (events?.length === 0 || !events) {
  //     return (
  //       <div className='h-screen max-w-full flex flex-col items-center justify-center mx-12'>
  //         <Image
  //           src='/images/no-event-image.jpg'
  //           alt='Imagem alternativa caso não hajam eventos para mostrar'
  //           width={450} height={450} />
  //         <span className='text-center text-sm text-hub-middlegray'>
  //           Você não criou nenhum evento ainda...
  //         </span>
  //       </div>
  //     )
  //   }

  //   return (
  //     <div>
  //       {events.map(event => (
  //         <EventCard event={event} />
  //       ))}
  //     </div>
  //   )
  // } 
// }

// export default DashboardPage
