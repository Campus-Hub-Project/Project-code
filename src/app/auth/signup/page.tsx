'use server'

import LinkButton from '@/src/components/shared/button/LinkButton'
import { MiddleCardHeader, MiddleCardTitle, MiddleCardDescription, MiddleCardContent } from '@/src/components/shared/card/MiddleCard'
import SignupForm from '@/src/components/shared/forms/SignupForm'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'

const SignupPage = async () => {
  return (
    <>
      <MiddleCardHeader>
        <MiddleCardTitle>
          <LinkButton to='/' isJustIcon><IconArrowLeft className='ml-4 text-grays-two' /></LinkButton>
          Cadastre-se
        </MiddleCardTitle>
        <MiddleCardDescription>Insira os dados abaixo para criar sua conta</MiddleCardDescription>
      </MiddleCardHeader>
      <MiddleCardContent>
        <SignupForm />
      </MiddleCardContent>
    </>
  )
}

export default SignupPage