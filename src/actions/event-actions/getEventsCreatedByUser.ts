'use server'

import { auth } from "@/src/auth"
import { findEventsCreatedByInstituitionId } from "@/src/lib/queries/event"
import { findUniqueUserById } from "@/src/lib/queries/user"

export const getEventsCreatedByUser = async () => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role === 'USER') return null

    const events = await findEventsCreatedByInstituitionId(session.user.id)

    return events
}
