import NextAuth from "next-auth"

declare module 'next-auth' {
    interface Session {
        accessToken: string
        refreshToken?: string
    }
}

// Estender a interface `JWT`
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string
        refreshToken?: string
    }
}
