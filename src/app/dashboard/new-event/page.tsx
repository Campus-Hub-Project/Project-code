import React, { ReactNode } from 'react'
import EventForm from './_components/event-form'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const NewEventPage = () => {
  return (
    <section className='min-h-screen w-full bg-hub-white flex justify-center'>
      <Card className='bg-hub-white border shadow-md rounded w-3/5 my-12'>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-semibold text-hub-blue'>
            Novo evento
          </CardTitle>
          <CardDescription className='mx-4 font-medium text-base text-hub-middlegray'>
            Insira as informações necesárias e crie um novo evento.
          </CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center'>
          <EventForm />
        </CardContent>
      </Card>
    </section>
  )
}

export default NewEventPage