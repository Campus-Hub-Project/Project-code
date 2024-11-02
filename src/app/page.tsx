'use server'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/src/components/ui/card';

import React from 'react'

import GoogleButton from '@/src/components/shared/button/GoogleButton';
import LinkButton from '@/src/components/shared/button/LinkButton';
import ImageCard from '@/src/components/shared/card/ImageCard';
import HalfContentHalfImageLayout from '../components/shared/layouts/HalfContentHalfImageLayout';

const HomePage = async () => {
  return (
    <HalfContentHalfImageLayout>
      <Card className='rounded border-none shadow-lg w-1/2 flex flex-col justify-center bg-hub-white'>
        <CardHeader className='-mt-28'>
          <CardTitle>
            <span className='text-5xl text-hub-black'>Olá, seja bem-vindo(a) ao
              <strong className='text-hub-blue font-bold'> campus_hub</strong>
            </span>
          </CardTitle>
          <CardDescription className='mr-14'>
            <span className='font-medium text-base text-hub-middlegray'>
              Aqui, você pode ficar por dentro das mais diversas novidades do mundo acadêmico.
              Entre agora e faça parte da nossa comunidade!
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className='mt-3 flex gap-3'>
          <GoogleButton>Para alunos</GoogleButton>
          <LinkButton to='/auth/signin' reverse>Para instituições</LinkButton>
        </CardContent>
      </Card>
      <ImageCard src='/images/home-page-image.jpg' alt='Imagem vetorial de um grupo de pessoas' />
    </HalfContentHalfImageLayout>
  )
}

export default HomePage
