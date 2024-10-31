import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

import type { NextAuthConfig } from "next-auth"
import { signinSchema } from '@/src/hooks/use-form/signin-useform'

import { compare } from 'bcryptjs'
import { findUniqueUserByEmail } from './lib/queries/user'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          // Definindo o scope para acessar o Google Calendar
          scope: 'openid profile email https://www.googleapis.com/auth/calendar.events'
        }
      },
    }),
    Credentials({
      async authorize(credentials) {
        const isDataAsSchema = signinSchema.safeParse(credentials)

        if (!isDataAsSchema.success) return null

        const isUserUnique = await findUniqueUserByEmail(isDataAsSchema.data.email)

        if (!isUserUnique) return null

        const isPasswordCorrect = await compare(isDataAsSchema.data.password, isUserUnique.password!)

        if (isPasswordCorrect) return isUserUnique

        return null
      }
    })
  ],
  pages: {
    signIn: '/signin',
    verifyRequest: '/auth/email-send'
  },
  secret: 'senhaabcde',
} satisfies NextAuthConfig