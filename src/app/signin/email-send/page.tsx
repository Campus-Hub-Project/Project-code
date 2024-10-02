import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import React from 'react'
import AuthForm from '../auth-form'

const EmailSendPage = () => {
  return (
    <main className='h-screen w-full bg-hub-white py-6 px-24 flex'>
      <section className='border-hub-middlegray shadow-lg flex-grow border-none rounded px-0 flex h-full'>
        <div className='bg-blue-500 w-1/2 rounded'>
          ALGUMA IMAGEM AQUI
        </div>
        <div className='w-1/2 flex flex-col justify-center'>
          <Card className='border-none mx-24 bg-hub-white shadow-none'>
            <CardHeader className='text-center'>
              <CardTitle className='text-3xl font-semibold text-hub-blue'>
                Muito bem!
              </CardTitle>
              <CardDescription className='mx-4 font-medium text-base text-hub-middlegray'>
                Uma mensagem foi enviada ao e-mail da sua instituição. 
                Por favor, verifique sua caixa de entrada.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default EmailSendPage