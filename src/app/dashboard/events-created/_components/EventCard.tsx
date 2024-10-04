import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

interface Props {
    event: {
        name: string,
        description: string,
        eventType: string,
        eventFormat: string,
        eventDayTo: Date,
        eventDayFrom: Date,
        applicationPeriodTo: Date,
        applicationPeriodFrom: Date,
        eventValue: number,
        eventLimit: number,
    }
}

const EventCard = ({ event }: Props) => {
    return (
        <section className='min-h-screen w-full bg-hub-white flex justify-center'> 
            <Card className='bg-hub-white border shadow-md rounded w-3/5 my-12'>
                <CardHeader className=''>
                    <CardTitle className='text-3xl font-semibold text-hub-blue uppercase'>{event.name}</CardTitle>
                    <CardDescription className='mx-4 font-medium text-base text-hub-middlegray'>{event.description}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                    <Button>Mais informações</Button>
                    <Button>Se inscrever</Button>
                </CardFooter>
            </Card>
        </section>
    )
}

export default EventCard
