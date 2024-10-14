'use client'
import React from 'react'
import AuthForm from './auth-form'
import SigninLayout from './signin-layout'

const SigninPage = () => {
  return (
    <SigninLayout title='Login' description='Insira o e-mail da instituição. Você receberá uma mensagem de confirmação para continuar'>
      <AuthForm />
    </SigninLayout>
  )
}

export default SigninPage