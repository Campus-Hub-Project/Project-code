import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../db"
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'

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
        async jwt({ user, token }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    role: user.role || 'instituition'
                }
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                    role: token.role as string
                }
            }
        },
        async signIn({ user }) {
            if (!user.role && user.email) {
                await prisma.user.update({
                    where: { email: user.email },
                    data: { role: "instituition" },
                });
            }
            return true;
        },
    },
    secret: "abcd1234"
})

