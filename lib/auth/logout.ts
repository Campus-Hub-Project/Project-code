'use server'

import { signOut } from "../../src/auth"

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