'use server'

import {
    loginInstituitionSchema,
    loginInstituitionSchemaType
} from "@/schemas/login-instituition-schema"

import { signIn } from "@/src/auth"
import { DEFAULT_REDIRECT_PATH } from "@/src/routes"

const signInWithEmailAction = async (data: loginInstituitionSchemaType) => {

    const isDataAsScehma = loginInstituitionSchema.safeParse(data)

    if (!isDataAsScehma.success) return null

    try {
        await signIn('email', {
            email: isDataAsScehma.data.email,
            redirectTo: DEFAULT_REDIRECT_PATH
        })
    } catch (error) {
        throw error
    }
}

export default signInWithEmailAction
