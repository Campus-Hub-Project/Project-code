'use server'

import { Account, User } from "next-auth"
import { JWT } from 'next-auth/jwt'

const handleConfigJWT = async (user: User | null, token: JWT, account?: Account) => {
    // se o provedor do usuário que está logando é o Google,
    // o access_token do Google é armazenado no JWT para futuras requisições à API do Google Calendar
    if (account?.provider === 'google') token.accessToken = account.access_token

    // se o usuário existir, armazeno o id e a role dele no seu JWT
    // o id do token é definido como o id do usuário e a role do token é definido como a role do usuário
    // isso é importante pois as requisições feitas ao servidor vão precisar dessas informações
    if (user) {
        token.id = user.id,
        token.role = user.role || 'instituition'
    }
    return token
}

export default handleConfigJWT;
