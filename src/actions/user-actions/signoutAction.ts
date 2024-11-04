'use server'

import { signOut } from "@/src/auth"

export const signoutAction = async () => {    
    try {
        await signOut()
    } catch (error) {

    }
}