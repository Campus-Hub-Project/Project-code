'use server'

import Link from 'next/link'
import React from 'react'
import { Card } from '../../ui/card'

const EventCard = async () => {
    return (
        <Card className=' w-full h-fit border-2 border-grays-five bg-grays-seven rounded-sm p-4 shadow-none'>
            <div className='flex items-center justify-between'>
                <h4 className='text-left font-medium text-xl text-blues-three'>Nome do evento</h4>
                <span className='text-right font-normal text-sm text-grays-five'>Participando: 1 de 250</span>
            </div>
            <div className='flex gap-4'>
                {/* <SeeMoreButton to=''>Ver mais</SeeMoreButton>
                <SeeMoreButton to=''>Participar</SeeMoreButton> */}
            </div>
        </Card>
    )
}

export default EventCard