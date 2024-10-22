'use server'

import {
    createNewInstituitionUser,
    findAccountByUserId,
    findUniqueUserByEmail
} from "@/queries/user-queries"

import { Account, User } from "next-auth"

const handleConfigSignin = async (user: User, account: Account) => {
    // verifico se o provedor usado no login é o Google
    const isGoogleProvider = account.provider === 'google'

    // busco o usuário no banco de dados com base no e-mail passado
    const existingUser = await findUniqueUserByEmail(user.email!)

    // se o provedor não é o Google e o usuário não existe no banco de dados, é uma nova instituição fazendo login
    if (!isGoogleProvider && !existingUser) await createNewInstituitionUser(user.email!)

    // se o provedor é o Google e o usuário não existe no banco de dados, 
    // retorna true para o NextAuth continuar o processo de autenticação normalmente
    if (isGoogleProvider && !existingUser) return true
    
    // se o provedor é o Google e uma conta desse usuário não existe no banco de dados,
    // retorna true para o NextAuth continuar o processo de autenticação normalmente
    const existingAccount = await findAccountByUserId(user.id!)
    if (!existingAccount) return true

    return true
}

export default handleConfigSignin

// if (account?.provider !== 'google') {
//     const existingUser = await findUniqueUserByEmail(user.email!)
//     if (!existingUser) await createNewInstituitionUser(user.email!)
// }
    
// const existingUser = await findUniqueUserByEmail(user.email!)
// if (!existingUser) return true
    
// const existingAccount = await findAccountByUserId(existingUser.id)
// if (!existingAccount) return true

// return true