'use client'
import { signOut } from '@/src/auth'
import React from 'react'

const SignoutButton = ({ children, forever = false, id }: { children: React.ReactNode, forever?: boolean, id?: string }) => {

    const handleSignout = async () => {
        await signOut({
            redirectTo: '/'
        })
    }

    const handleSignoutForever = async () => {
        try {
            // await deleteUser(id)
            await signOut({
                redirectTo: '/'
            })
        } catch (error) {

        }
    }

    if (!forever) return <button onClick={handleSignout}>{children}</button>
    if (forever) return <button onClick={handleSignoutForever}>{children}</button>
}

export default SignoutButton
