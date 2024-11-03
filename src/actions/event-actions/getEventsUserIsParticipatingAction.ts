'use server'

import { auth } from "@/src/auth"
import { findEventsWhereUserIsParticipating } from "@/src/lib/queries/event"
import { findUniqueUserById } from "@/src/lib/queries/user"

export const getEventsUserIsParticipatingAction = async () => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role !== 'USER') return null

    const events = await findEventsWhereUserIsParticipating(session.user.id)

    return events
}