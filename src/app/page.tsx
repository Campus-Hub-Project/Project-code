'use server'
import React from 'react'
import BasicLayout from '../components/shared/layouts/BasicLayout'
import { MiddleCard, MiddleCardDescription, MiddleCardFooter, MiddleCardHeader, MiddleCardTitle } from '../components/shared/card/MiddleCard'
import BgImageLayout from '../components/shared/layouts/BgImageLayout'
import LinkButton from '../components/shared/button/LinkButton'
import Image from 'next/image'

const HomePage = async () => {
  return (
    <BasicLayout>
      <div className='w-full h-screen flex flex-col items-center'>
        <MiddleCard>
          <BgImageLayout>
            <MiddleCardHeader isLP>
              <Image src='/logo.svg' alt='Logo' width={200} height={200} className='cursor-pointer' />
              <MiddleCardTitle isLP>
                Olá, seja bem-vindo(a) ao <strong className='text-blues-three'>campus_hub</strong>
              </MiddleCardTitle>
              <MiddleCardDescription isLP>
                Aqui, você pode ficar por dentro das mais diversas novidades do mundo acadêmico.
                Entre agora e faça parte da nossa comunidade!
              </MiddleCardDescription>
            </MiddleCardHeader>
            <MiddleCardFooter isLP>
              <LinkButton to='/auth/signin'>Entrar</LinkButton>
              <LinkButton to='/auth/signup' isGray>Criar conta</LinkButton>
            </MiddleCardFooter>
          </BgImageLayout>
        </MiddleCard>
      </div>
    </BasicLayout>
  )
}

export default HomePage
