'use server'

import { findEventsWhereUserIsParticipating } from "@/src/lib/queries/event"
import { getUserSession } from "../user-actions/getUserSession"

export const getEventsUserIsParticipatingAction = async () => {
    const session = await getUserSession('USER')
    if (!session) return null

    const events = await findEventsWhereUserIsParticipating(session.user.id as string)

    return events
}