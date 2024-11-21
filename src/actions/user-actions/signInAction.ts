'use server'

import { signIn } from "@/src/auth"
import { signinSchema, TypeSigninForm } from "@/src/hooks/use-form/auth-useform"
import { findUniqueUserByEmail } from "@/src/lib/queries/user"
import { DEFAULT_REDIRECT_PATH } from "@/src/routes"

export const handleSigninAction = async (provider: string, data?: TypeSigninForm) => {
    if (provider === 'google') handleSignInWithGoogle()

    if (provider === 'credentials') handleSignInWithCredentials(data!)
}

const handleSignInWithCredentials = async (data: TypeSigninForm) => {
    const isDataAsSchema = signinSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const doesUserExists = await findUniqueUserByEmail(isDataAsSchema.data.email)

    if (!doesUserExists) return null

    await signIn('credentials', {
        email: isDataAsSchema.data.email,
        password: isDataAsSchema.data.password,
        redirectTo: DEFAULT_REDIRECT_PATH
    })
}

const handleSignInWithGoogle = async () => {
    await signIn('google', {
        redirectTo: DEFAULT_REDIRECT_PATH
    })
}