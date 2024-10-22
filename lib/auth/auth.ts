import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../db"
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'
import handleConfigJWT from "./handleConfigJWT"
import handleConfigSession from "./handleConfigSession"
import handleConfigSignin from "./handleConfigSignin"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 dias em segundos
    },
    pages: {
        signIn: '/',
        verifyRequest: '/signin/email-send'
    },
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
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    emailVerified: profile.email_verified,
                    role: "user",
                };
            },
        }),
        Nodemailer({
            id: 'email',
            name: 'email',
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: parseInt(process.env.EMAIL_SERVER_PORT as string, 10),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        })
    ],
    callbacks: {
        // sempre que um JWT é gerado, isso deve ser feito:
        async jwt({ user, token, account }) {
            const configuredToken = await handleConfigJWT(user, token, account!)
            return configuredToken
        },
        // sempre que uma sessão é criada ou cancelada, isso deve ser feito:
        async session({ session, token }) {
            const configuredSession = await handleConfigSession(session, token)
            return configuredSession
        },
        // sempre que um usuário tentar o login, isso deve ser feito:
        async signIn({ user, account }) {
            return await handleConfigSignin(user, account!)
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/dashboard`
        }
    },
    secret: "abcd1234"
})

