'use server'

import { findEventsCreatedByInstituitionId } from "@/src/lib/queries/event"
import { getUserSession } from "../user-actions/getUserSession"

export const getEventsCreatedByUser = async () => {
    const session = await getUserSession('INSTITUITION')
    if (!session) return null

    const events = await findEventsCreatedByInstituitionId(session.user.id as string)
        
    return events
}
