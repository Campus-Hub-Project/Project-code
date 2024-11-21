'use server'


import LinkButton from '@/src/components/shared/button/LinkButton'
import { MiddleCardContent, MiddleCardDescription, MiddleCardHeader, MiddleCardTitle } from '@/src/components/shared/card/MiddleCard'
import SigninForm from '@/src/components/shared/forms/SigninForm'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'

const SigninPage = async () => {
  return (
    <>
      <MiddleCardHeader>
        <MiddleCardTitle>
          <LinkButton to='/' isJustIcon><IconArrowLeft className='ml-4 text-grays-two' /></LinkButton>
          Entre na sua conta
        </MiddleCardTitle>
        <MiddleCardDescription>Insira os dados abaixo para entrar na sua conta</MiddleCardDescription>
      </MiddleCardHeader>
      <MiddleCardContent>
        <SigninForm />
      </MiddleCardContent>
    </>
  )
}

export default SigninPage