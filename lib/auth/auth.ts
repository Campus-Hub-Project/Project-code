import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../db"
import Google from 'next-auth/providers/google'
import Email from 'next-auth/providers/nodemailer'


export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 dias em segundos
    },
    pages: {
        signIn: '/'
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Email({
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
        async jwt({ user, token }) {
            if (user) {
                return {
                    ...token,
                    id: user.id
                }
            }
            return token
        },
        async session({ session, token }) {
            console.log({ session, token });

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string
                }
            }
        }
    },
    secret: "abcd1234"
})

