'use server'
import React from 'react'
import NewEventForm from '@/src/components/shared/forms/NewEventForm'
import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'

const NewEventPage = async () => {
  return (
    <>
      <MiddleCardHeader>
        <MiddleCardTitle>Novo evento</MiddleCardTitle>
        <MiddleCardDescription>
          Insira as informações para criar um novo evento
        </MiddleCardDescription>
      </MiddleCardHeader>
      <MiddleCardContent>
        <NewEventForm />
      </MiddleCardContent>
    </>
  )
}

export default NewEventPage