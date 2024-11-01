'use server'

import { v4 as uuidv4 } from 'uuid'
import { findVerificationTokenByEmail } from './queries/verificate-email-token'
import { prisma } from './db'


export const generateVerificationToken = async (email: string) => {
    const token = uuidv4()
    // DATA ATUAL
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const isTokenExists = await findVerificationTokenByEmail(email)

    if (isTokenExists) prisma.verificateEmailToken.delete({
        where: { id: isTokenExists.id }
    })

    const verificationToken = await prisma.verificateEmailToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return verificationToken
}