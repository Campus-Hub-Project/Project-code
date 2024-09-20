'use server'

import { signIn } from "./auth"

const signInWithGoogle = async () => {
    try {
        await signIn('google', {
            redirectTo: '/dashboard',
        })
    } catch (error) {
        throw error
    }
}

export default signInWithGoogle