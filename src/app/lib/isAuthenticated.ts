'use server'

import { auth } from './authConfig'

export const checkIfIsAuthenticated = async () => {
    const session = await auth()
    console.log(session);
    
    if (session) {
        return true
    } else {
        return false
    }
}