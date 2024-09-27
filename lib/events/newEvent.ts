'use server'

import { newEventSchema, newEventSchemaType } from "@/src/app/dashboard/new-event/_components/schema"

export const createNewEvent = async (data: newEventSchemaType) => {

    console.log(data);
    

    // const isDataAsSchema = newEventSchema.safeParse(data)

    // if (!isDataAsSchema.success) return null

    // const { 
    //     name, 
    //     description,
    //      eventType, 
    //      eventFormat, 
    //      eventDay, 
    //      applicationPeriod, 
    //      eventValue, 
    //      eventLimit } = isDataAsSchema.data

    
}
