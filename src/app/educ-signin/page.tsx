'use client'
import React from 'react'
import AuthForm from './auth-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const EducSigninPage = () => {
  return (
    <main className='h-screen w-full bg-hub-white py-6 px-24 flex'>
      <section className='border-hub-middlegray shadow-lg flex-grow border-none rounded px-0 flex h-full'>
        <div className='bg-blue-500 w-1/2 rounded'>
          ALGUMA IMAGEM AQUI
        </div>
        <div className='w-1/2 flex flex-col justify-center'>
          <Card className='border-none mx-24'>
            <CardHeader className='text-center'>
              <CardTitle className='text-3xl font-semibold text-hub-blue'>
                Login
              </CardTitle>
              <CardDescription className='mx-4 font-medium text-base text-hub-middlegray'>
                Insira o e-mail de sua instituição. Você receberá uma mensagem de confirmação para continuar
              </CardDescription>
            </CardHeader>
            <CardContent className='mt-3 flex gap-3'>
              <AuthForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default EducSigninPage