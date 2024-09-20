import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AuthForm from './auth-form'

const EducSigninPage = () => {
  return (
    <main className='h-screen w-full bg-hub-white flex items-center justify-center'>
        <Card className='border-2 border-black'>
            <CardHeader>
                <CardTitle>Entrar</CardTitle>
                <CardDescription>Insira seu e-mail para entrar na plataforma</CardDescription>
            </CardHeader>
            <CardContent>
                <AuthForm />
            </CardContent>
        </Card>
    </main>
  )
}

export default EducSigninPage