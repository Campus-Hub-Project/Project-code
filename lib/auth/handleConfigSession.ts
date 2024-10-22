'use server'

import { Session } from "next-auth"
import { JWT } from 'next-auth/jwt'

const handleConfigSession = async (session: Session, token: JWT) => {
    session.user = {
        ...session.user,
        id: token.id as string,
        role: token.role as string,
    }
    session.accessToken = token.accessToken as string
    return session
}

export default handleConfigSession
