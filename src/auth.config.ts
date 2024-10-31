import Google from 'next-auth/providers/google'
import Email from 'next-auth/providers/nodemailer'

import type { NextAuthConfig } from "next-auth"

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
    // Email({
    //   id: 'email',
    //   name: 'email',
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: parseInt(process.env.EMAIL_SERVER_PORT as string, 10),
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     }
    //   },
    //   from: process.env.EMAIL_FROM,
    // })
  ],
  pages: {
    signIn: '/signin',
    verifyRequest: '/auth/email-send'
  },
  secret: 'senhaabcde',
} satisfies NextAuthConfig