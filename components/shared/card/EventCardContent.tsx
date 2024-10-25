'use server'
import React from 'react'

interface Props {
    commonText: string,
    formattedText: string,
    isParticipant: boolean,
}

const EventCardContent = async ({ commonText, formattedText, isParticipant = false }: Props) => {

    const finalText = `${commonText}: ${formattedText}`

    if (isParticipant) return <span className='text-hub-blue font-semibold'>{finalText}</span>

    return <span>{finalText}</span>
}

export default EventCardContent
