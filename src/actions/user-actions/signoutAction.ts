'use server'

import { signOut } from "@/src/auth"

export const signoutAction = async () => {
    alert('CLICOOOOOOOOOOOOOOOOOOOOOOOOOOOOOU');
    
    try {
        await signOut({
            redirectTo: '/'
        })
    } catch (error) {

    }
}