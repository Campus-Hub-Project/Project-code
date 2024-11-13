'use server'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/src/components/ui/card'
import NewEventForm from '@/src/components/shared/forms/NewEventForm'
import EventFormLayout from '@/src/components/shared/layouts/EventFormLayout'

const NewEventPage = async () => {
  return (
    <EventFormLayout>
      <Card className='rounded border-none shadow-lg bg-hub-white w-4/5 '>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl text-hub-blue'>
            Novo evento
          </CardTitle>
          <CardDescription className='font-medium text-base text-hub-middlegray'>
            Insira as informações necesárias e crie um novo evento
          </CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center'>
          <NewEventForm />
        </CardContent>
      </Card>
    </EventFormLayout>
  )
}

export default NewEventPage