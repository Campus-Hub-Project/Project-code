'use client'

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';

import signInWithGoogle from '@/lib/auth/signinWithGoogle'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import btCss from '@/styles/Button.module.css'
import mainCss from '@/styles/Main.module.css'

import { FcGoogle } from "react-icons/fc";

const HomePage = () => {
  return (
    <main className={mainCss['main-tag-config']}>
      <section className='border-hub-middlegray shadow-lg flex-grow border-none rounded px-0 flex h-full'>
        <div className='w-1/2 flex flex-col justify-center'>
          <Card className='mx-6 border-none shadow-none bg-hub-white'>
            <CardHeader>
              <CardTitle className='text-5xl font-semibold text-hub-black'>
                Olá, seja bem-vindo(a) ao <span className='text-hub-blue font-bold'>campus_hub</span>
              </CardTitle>
              <CardDescription className=' font-medium text-base text-hub-middlegray'>
                Aqui, você pode ficar por dentro das mais diversas novidades do mundo acadêmico.
                Entre agora e faça parte da nossa comunidade!
              </CardDescription>
            </CardHeader>
            <CardContent className='mt-3 flex gap-3'>
              <Button
                onClick={() => signInWithGoogle()}
                className={`${btCss['basic-button-config']} gap-1`}>
                <FcGoogle size={20} />
                Entrar com Google</Button>
              <Link
                href="/signin"
                className={`${btCss['basic-button-config']} flex items-center justify-center px-4`}>
                Para instituições</Link>
            </CardContent>
          </Card>
        </div>
        <div className='w-1/2 rounded text-right'>
          <Image src='/images/home-page-image.jpg' alt={''} width={2000} height={2000} />
          <p className='-mt-6 pr-3 text-xs text-hub-lightgray'>Designed by
            <a href='http://br.freepik.com/' target='_blank' className='text-hub-blue'> freepik</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage
