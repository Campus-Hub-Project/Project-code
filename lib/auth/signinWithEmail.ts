'use server'

import { loginInstituitionSchemaType } from "@/schemas/login-instituition-schema"
import { signIn } from "../../src/auth"

const signInWithEmail = async (data: loginInstituitionSchemaType) => {
    try {
        await signIn('email', {
            email: data.email,
            callbackUrl: '/dashboard'
        })
    } catch (error) {
        throw error
    }
}

export default signInWithEmail
