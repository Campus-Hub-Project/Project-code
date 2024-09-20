'use server'

import { formSchemaType } from "@/src/app/educ-signin/schema"
import { signIn } from "./auth"

const signInWithEmail = async (data: formSchemaType) => {
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