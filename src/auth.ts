import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"

import { findUniqueUserById, findUniqueUserByEmail } from "./lib/queries/user"
import { prisma } from "./lib/db"
   
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account }) {
      if (!token.sub) return token

      // SE O PROVEDOR DA CONTA FOR O GOOGLE, ATRELA O ACCESS TOKEN DA CONTA AO ACCESS TOKEN DO JWT
      if (account?.provider === 'google') token.accessToken = account.access_token

      // BUSCO O USUÁRIO PELO ID NO TOKEN
      const doesUserExists = await findUniqueUserById(token.sub)
      if (!doesUserExists) return token

      // ATRELO A ROLE DO USUÁRIO A ROLE DO TOKEN DELE
      token.role = doesUserExists.role

      return token
    },
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub

      if (token.role && session.user) session.user.role = token.role as 'ADMIN' | 'USER' | 'INSTITUITION'

      return session
    },
    async signIn({ user, account }) {
      const doesUserExists = await findUniqueUserByEmail(user.email!)

      if (!doesUserExists) {
        const role = account?.provider === 'google' ? 'USER' : 'INSTITUITION'

        // await insertUserJustSignUp(user.name, user.email!, user.image) 
      }
      return true
    },

  },
  ...authConfig,
})
