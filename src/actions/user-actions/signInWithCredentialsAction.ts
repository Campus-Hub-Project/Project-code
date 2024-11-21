'use server'

import { signIn } from "@/src/auth"
import {
    signinSchema,
    TypeSigninSchema
} from "@/src/hooks/use-formaaa/signin-useform"

import { findUniqueUserByEmail } from "@/src/lib/queries/user"
import { DEFAULT_REDIRECT_PATH } from "@/src/routes"
import { AuthError } from "next-auth"

const signInWithEmailAction = async (data: TypeSigninSchema) => {

    const isDataAsSchema = signinSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const doesUserExists = await findUniqueUserByEmail(isDataAsSchema.data.email)

    if (!doesUserExists) return null

    try {
        await signIn('credentials', {
            email: isDataAsSchema.data.email,
            password: isDataAsSchema.data.password,
            redirectTo: DEFAULT_REDIRECT_PATH
        })
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

export default signInWithEmailAction
