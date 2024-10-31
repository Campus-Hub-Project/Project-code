'use server'

import { getAllEventsFromPlataform } from "@/lib/queries/event-queries"
import { auth } from "../../src/auth"

export const allEventsCreated = async () => {
    const session = await auth()

    if (!session || !session.user) return null

    const allEvents = await getAllEventsFromPlataform()

    return allEvents
}
