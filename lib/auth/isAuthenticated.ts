'use server'

import { auth } from "../../src/auth"

const isAuthenticated = async () => {
    const session = await auth()

    if (session) return true
    return false
}

export default isAuthenticated