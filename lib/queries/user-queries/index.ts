'use server'

import { prisma } from "@/lib/db"

export const findUniqueUserByEmail = async (email: string) => {
    const existingUser = await prisma.user.findUnique({
        where: { email: email },
    })
    return existingUser
}

export const findUniqueUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id },
    })
    return user
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

export const insertFirstSigninUser =
    async (name: string | null | undefined, email: string, image: string | null | undefined, role: string) => {
        await prisma.user.create({
            data: { name, email, image, role },
        });
    }

export const createNewInstituitionUser = async (email: string) => {
    await prisma.user.create({
        data: {
            email,
            role: 'instituition'
        }
    })
}

export const findEventsUserSubscribed = async (id: string) => {
    const events = await prisma.event.findMany({
        where: {
            participants: {
                some: { id }
            }
        },
        include: {
            participants: true
        }
    })
    return events
}