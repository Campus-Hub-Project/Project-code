import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"

import { findUniqueUserById } from "./lib/queries/user"

import { prisma } from "./lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account }) {
      // SE O PROVEDOR DA CONTA FOR O GOOGLE, ATRELA O ACCESS TOKEN DA CONTA AO ACCESS TOKEN DO JWT
      if (account?.provider === 'google') {
        token.accessToken = account.access_token as string
        token.refreshToken = account.refresh_token as string | undefined
      }

      // BUSCO O USUÁRIO PELO ID NO TOKEN E ATRELO A ROLE DO USUÁRIO A ROLE DO TOKEN DELE CASO ELE JÁ EXISTA
      const doesUserExists = await findUniqueUserById(token.sub!)
      if (doesUserExists) token.role = doesUserExists.role

      return token
    },

    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub
      if (token.role && session.user) session.user.role = token.role as 'ADMIN' | 'USER' | 'INSTITUITION'

      if (token.role === 'USER') {
        session.accessToken = token.accessToken as string
        session.refreshToken = token.refreshToken as string | undefined
      }
      return session
    },

    async signIn({ user }) {
      const doesUserExists = await findUniqueUserById(user.id!)
      if (!doesUserExists || !doesUserExists.emailVerified) return false

      return true
    }
  },
  ...authConfig,
})
