'use server'

import { findEventsCreatedWhereInstituitionID, findEventsWhereUserIDIsAttendee } from "@/src/lib/queries/event"
import { getUserSession } from '@/src/actions/auth-action'
import { UserRole } from "@prisma/client"
import { EventToFormatComplexData, EventToShowOnCard } from "@/src/interfaces/event"

import { turnComplexEventDataIntoSimpleOne } from '@/src/actions/format-actions/frontend'

export const getDashboardEvents = async ({ role }: { role: UserRole }) => {
    const session = await getUserSession(role)
    if (!session) return null

    let complexEvents: EventToFormatComplexData[] = []
    if (role === UserRole.INSTITUITION) complexEvents = await findEventsCreatedWhereInstituitionID(session.user.id as string)
    if (role === UserRole.USER) complexEvents = await findEventsWhereUserIDIsAttendee(session.user.id as string)

    const events = await turnComplexEventDataIntoSimpleOne({ complexEvents })
    return events
}

