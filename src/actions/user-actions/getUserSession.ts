'use server'

import { auth } from "@/src/auth"
import { findUniqueUserById } from "@/src/lib/queries/user"

export const getUserSession = async (role: 'ADMIN' | 'USER' | 'INSTITUITION') => {
    const session = await auth()

    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role !== role) return null

    return session
}