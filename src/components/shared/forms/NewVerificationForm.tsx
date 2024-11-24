'use client'

import { verifyVerificationToken } from '@/src/actions/auth-action'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const NewVerificationForm = () => {

    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const submitForm = useCallback(async () => {
        try {
            if (token) await verifyVerificationToken(token)
        } catch (error) {
            alert('Algo deu errado')
        }
    }, [token])

    useEffect(() => {
        submitForm()
    }, [submitForm])

    return null
}

export default NewVerificationForm