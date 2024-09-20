'use server'

import { auth } from './authConfig'

export const checkIfIsAuthenticated = async () => {
    const session = await auth()
    
    if (session) {
        return true
    } else {
        return false
    }
}