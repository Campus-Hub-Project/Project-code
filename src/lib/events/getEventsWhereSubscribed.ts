'use server'

import { findEventsUserSubscribed } from "@/lib/queries/user-queries"
import { auth } from "../../auth"

export const getEventsWhereSubscribed = async () => {
    const session = await auth()

    if (!session || !session.user) return null

    const events = await findEventsUserSubscribed(session.user.id!)

    return events
}