'use server'

import { findAllEventsFromPlataform } from "@/src/lib/queries/event"
import { getUserSession } from '@/src/actions/auth-action'
import { EventToFormatComplexData, EventToShowOnCard } from "@/src/interfaces/event"

import { turnComplexEventDataIntoSimpleOne } from '@/src/actions/format-actions/frontend'

export const getAllEvents = async () => {
    const session = await getUserSession('USER')
    if (!session) return null
    
    const complexEvents: EventToFormatComplexData[] = await findAllEventsFromPlataform()
    
    const events: EventToShowOnCard[] = await turnComplexEventDataIntoSimpleOne({ complexEvents })
    
    return events
}