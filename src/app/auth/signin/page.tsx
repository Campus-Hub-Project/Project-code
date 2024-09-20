import React from 'react'
import { redirect } from 'next/navigation'

const SigninPage = () => {
    const isAuthenticated = false

    if (isAuthenticated) {
        redirect('/dashboard')
    }
}

export default SigninPage