'use server'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/src/components/ui/card'
import NewEventForm from '@/src/components/shared/forms/NewEventForm'

const NewEventPage = async () => {
  return (
    <div className='w-4/5 min-h-screen py-12 ml-36 flex justify-center'>
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
    </div>
  )
}

export default NewEventPage