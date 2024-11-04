'use client'
import { signoutAction } from '@/src/actions/user-actions/signoutAction'
import { signOut } from '@/src/auth'
import React from 'react'

const SignoutButton = ({ children, forever = false, id }: { children: React.ReactNode, forever?: boolean, id?: string }) => {

    const handleSignout = async () => console.log('CLICOOOOOU');
    
        //await signoutAction()

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
    else return <button onClick={handleSignoutForever}>{children}</button>
}

export default SignoutButton
