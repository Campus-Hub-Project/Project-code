'use server'

import { User } from "next-auth"

export interface EventWithParticipantsAsProps {
    event: {
        id: string
        name: string,
        description: string,
        type: string,
        format: string,
        starts: Date,
        ends: Date,
        subs_starts: Date,
        subs_ends: Date,
        price: number,
        participants_limit: number,
        participants: User[]
    },
}