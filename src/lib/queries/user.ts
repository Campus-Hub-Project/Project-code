'use server'

import { prisma } from "../db"

export const findUniqueUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    })

    return user
}

export const insertUserJustSignUp = async (
    name: string | null | undefined, email: string, role: 'ADMIN' | 'USER' | 'INSTITUITION', password?: string
) => {
    const user = await prisma.user.create({
        data: { name, email, password, role }
    })

    return user
}

export const findUniqueUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    })

    return user
}

export const insertEmailVerifiedDate = async (id: string) => {
    await prisma.user.update({
        where: { id },
        data: { emailVerified: new Date() }
    })
}

export const updateUserEmailToVerified = async (id: string, email: string) => {
    await prisma.user.update({
        where: { id },
        data: {
            emailVerified: new Date(),
            email
        }
    })
}

export const deleteVerificationToken = async (id: string) => {
    await prisma.verificateEmailToken.delete({
        where: { id }
    })
}

export const deleteUserAccount = async (id: string) => {
    await prisma.user.delete({
        where: { id }
    })
}
