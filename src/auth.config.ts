import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

import type { NextAuthConfig } from "next-auth"
import { signinSchema } from '@/src/hooks/use-formaaa/signin-useform'

import { findUniqueUserByEmail } from './lib/queries/user'

import { compare } from 'bcryptjs'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email https://www.googleapis.com/auth/calendar.events',
          access_type: 'offline',
          prompt: 'consent'
        }
      },
    }),
    Credentials({
      async authorize(credentials) {
        const isDataAsSchema = signinSchema.safeParse(credentials)

        if (!isDataAsSchema.success) return null

        const isUserUnique = await findUniqueUserByEmail(isDataAsSchema.data.email)

        if (!isUserUnique || typeof isUserUnique.password !== 'string') return null

        const isPasswordCorrect = await compare(isDataAsSchema.data.password, isUserUnique.password)

        if (isPasswordCorrect) return isUserUnique

        return null
      }
    })
  ],
  pages: {
    signIn: 'auth/signin',
    verifyRequest: '/auth/email-send'
  },
  secret: 'senhaabcde',
} satisfies NextAuthConfig