'use server'

import { prisma } from "../db"

export const findVerificationTokenByEmail = async (email: string) => {
    const verificationToken = await prisma.verificateEmailToken.findFirst({
        where: { email }
    })

    return verificationToken
}

export const findVerificationTokenByToken = async (token: string) => {
    const verificationToken = await prisma.verificateEmailToken.findUnique({
        where: { token }
    })

    return verificationToken
}