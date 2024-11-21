'use server'

import { prisma } from "@/src/lib/db"
import { findUniqueUserByEmail } from "@/src/lib/queries/user"
import { findVerificationTokenByToken } from "@/src/lib/queries/verificate-email-token"

export const newVerificationAction = async (token: string) => {
    const isTokenValid = await findVerificationTokenByToken(token)

    if (!isTokenValid) return null

    const hasTokenExpired = new Date(isTokenValid.expires) < new Date()

    if (hasTokenExpired) return { error: 'O token de verificação expirou' }

    const doesUserExists = await findUniqueUserByEmail(isTokenValid.email!)

    if (!doesUserExists) return null

    await prisma.user.update({
        where: { id: doesUserExists.id },
        data: {
            emailVerified: new Date(),
            email: isTokenValid.email,
        }
    })

    await prisma.verificateEmailToken.delete({
        where: { id: isTokenValid.id }
    })

    return { sucess: 'E-mail verificado' }
}