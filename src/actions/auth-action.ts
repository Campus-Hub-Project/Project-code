'use server'

import { auth, signOut, signIn } from "@/src/auth"
import {
    deleteVerificationToken, findUniqueUserById,
    deleteUserAccount, findUniqueUserByEmail, insertUserJustSignUp
} from "@/src/lib/queries/user"

import { UserRole } from "@prisma/client"

import { signupSchema, TypeSignupSchema, signinSchema, TypeSigninSchema } from "@/src/hooks/use-form/auth-useform"
import { sendVerificationEmail } from "@/src/lib/mail"
import { generateVerificationToken } from "@/src/lib/tokens"
import { hash } from "bcryptjs"

import { DEFAULT_REDIRECT_PATH } from "@/src/routes"
import { AuthError } from "next-auth"

import { findVerificationTokenByToken } from "@/src/lib/queries/verificate-email-token"
import { turnEmailToVerified } from "../lib/queries/auth-queries"

const getUserSession = async (role: UserRole) => {
    const session = await auth()
    if (!session || !session.user || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    if (doesUserExists.role !== role) return null

    return session
}

const handleSignup = async (data: TypeSignupSchema) => {
    const isDataAsSchema = signupSchema.safeParse(data)
    if (!isDataAsSchema.success) return null

    const doesUserExists = await findUniqueUserByEmail(isDataAsSchema.data.email)
    if (doesUserExists) return null

    const hashedPassword = await hash(isDataAsSchema.data.password, 10)

    await insertUserJustSignUp(isDataAsSchema.data.name, isDataAsSchema.data.email, 'INSTITUITION', hashedPassword)

    const verificationToken = await generateVerificationToken(isDataAsSchema.data.email)
    await sendVerificationEmail(verificationToken.email as string, verificationToken.token)
}

const signInWithGoogle = async () => await signIn('google', {
    redirectTo: DEFAULT_REDIRECT_PATH
})

const signInWithCredentials = async (data: TypeSigninSchema) => {
    const isDataAsSchema = signinSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const doesUserExists = await findUniqueUserByEmail(isDataAsSchema.data.email)

    if (!doesUserExists) return null

    try {
        const result = !!await signIn('credentials', {
            email: isDataAsSchema.data.email,
            password: isDataAsSchema.data.password,
            redirectTo: DEFAULT_REDIRECT_PATH
        })
        return result
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin': return { error: 'Credenciais inválidas' }
                default: return { error: 'Algo deu errado, login não foi realizado corretamente' }
            }
        }
        throw error
    }
}

const verifyVerificationToken = async (token: string) => {
    const isTokenValid = await findVerificationTokenByToken(token)
    if (!isTokenValid) return null

    const hasTokenExpired = new Date(isTokenValid.expires) < new Date()
    if (hasTokenExpired) return { error: 'O token de verificação expirou' }

    const doesUserExists = await findUniqueUserByEmail(isTokenValid.email!)
    if (!doesUserExists) return null

    await turnEmailToVerified({ userID: doesUserExists.id, tokenEmail: isTokenValid.email as string })
    await deleteVerificationToken(isTokenValid.id)

    return { sucess: 'E-mail verificado' }
}

const regularSignout = async ({ isForever }: { isForever: boolean }) => {
    if (!isForever) await signOut()

    const session = await auth()
    if (!session || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)
    if (!doesUserExists) return null

    await deleteUserAccount(doesUserExists.id)
    await signOut()
}

export {
    getUserSession, handleSignup, signInWithGoogle, signInWithCredentials, verifyVerificationToken, regularSignout
}