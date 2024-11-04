'use server'

import { findAllEventsFromPlataform } from "@/src/lib/queries/event"
import { getUserSession } from "../user-actions/getUserSession"

export const getAllPlataformEventsAction = async () => {
    const session = await getUserSession('USER')
    if (!session) return null

    const events = await findAllEventsFromPlataform()

    return events
}