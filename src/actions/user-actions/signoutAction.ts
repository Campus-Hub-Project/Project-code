'use server'

import { signOut } from "@/src/auth"

export const signoutAction = async () => {    
    try {
        await signOut({
            redirectTo: '/'
        })
    } catch (error) {

    }
}