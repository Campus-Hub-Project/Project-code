'use server'

import { prisma } from "@/lib/db"

export const findUniqueUserByEmail = async (email: string) => {
    const existingUser = await prisma.user.findUnique({
        where: { email: email },
    })
    return existingUser
}

export const findAccountByUserId = async (userId: string) => {
    const existingAccount = await prisma.account.findFirst({
        where: {
            userId: userId,
            provider: 'google'
        }
    })
    return existingAccount
}

export const deleteUser = async (id: string) => {
    await prisma.user.delete({
        where: { id }
    })
}

export const createNewInstituitionUser = async (email: string) => {
    await prisma.user.create({
        data: {
            email,
            role: 'instituition'
        }
    })
}