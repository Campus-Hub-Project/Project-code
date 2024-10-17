import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../db"
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'
import { findUniqueUserByEmail, findAccountByUserId } from "@/queries/user-queries"

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
        async jwt({ user, token, account }) {
            // armazenando o access token no jwt
            if (account && account.provider === 'google') token.accessToken = account.access_token

            if (user) {
                token.id = user.id
                token.role = user.role || "instituition"
            }

            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...session.user,
                id: token.id as string,
                role: token.role as string,
            }
            session.accessToken = token.accessToken as string
            return session;
        },
        async signIn({ user, account, profile }) {
            if (account?.provider !== 'google') return true 
                
            const existingUser = await findUniqueUserByEmail(user.email!)
            if (!existingUser) return true
                
            const existingAccount = await findAccountByUserId(existingUser.id)

            if (!existingAccount) {

            }
            // if (user.email) {
            //     let existingUser = await prisma.user.findUnique({
            //         where: {
            //             email: user.email,
            //         }
            //     })

            //     if (!existingUser) {
            //         await prisma.user.create({
            //             data: {
            //                 email: user.email,
            //                 role: 'instituition'
            //             }
            //         })
            //     }
            // }
            // return true
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/dashboard/my-events`
        }
    },
    secret: "abcd1234"
})

