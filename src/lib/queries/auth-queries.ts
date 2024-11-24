'use server'

import { prisma } from "../db"

export const turnEmailToVerified = async ({ userID, tokenEmail }: { userID: string, tokenEmail: string }) => {
    await prisma.user.update({
        where: { id: userID },
        data: {
            emailVerified: new Date(),
            email: tokenEmail,
        }
    })
}

export const deleteVerificationToken = async ({ tokenID }: { tokenID: string }) => {
    await prisma.verificateEmailToken.delete({
        where: { id: tokenID }
    })
}