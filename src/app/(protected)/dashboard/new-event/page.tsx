'use server'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/src/components/ui/card'
import CreateNewEventForm from '@/src/components/shared/forms/create-new-event-form'

import crdCss from '@/styles/Card.module.css'

const NewEventPage = async () => {
  return (
    <section className='min-h-screen w-full bg-hub-white flex justify-center'>
      <Card className='bg-hub-white border shadow-md rounded w-3/5 my-12'>
        <CardHeader className='text-center'>
          <CardTitle className={crdCss['card-title']}>
            Novo evento
          </CardTitle>
          <CardDescription className='mx-4 font-medium text-base text-hub-middlegray'>
            Insira as informações necesárias e crie um novo evento
          </CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center'>
          <CreateNewEventForm />
        </CardContent>
      </Card>
    </section>
  )
}

export default NewEventPage