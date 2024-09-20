'use server'

import { signIn } from "./authConfig"

export const handleSignInWithGoogle = async () => {
    try {
        await signIn('google', {
            redirectTo: '/dashboard'
        })
        
    } catch (error) {
        throw error
    }
}