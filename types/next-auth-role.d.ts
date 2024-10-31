import NextAuth, { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession['user'] & {
    role: 'ADMIN' | 'USER' | 'INSTITUITION'
}

declare module 'next-auth' {
    interface Session {
        user: ExtendedUser
    }
}