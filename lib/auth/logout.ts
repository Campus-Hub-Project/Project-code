'use server'

import { signOut } from "./auth"

const logout = async () => {
    try {
        await signOut({
            redirectTo: '/'
        })
    } catch (error) {
        throw error
    }
}

export default logout