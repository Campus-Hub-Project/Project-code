'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { handleSignInWithGoogle } from './lib/handleSigninWithGoogle'

const HomePage = () => {
  return (
    <main className="h-screen w-full bg-hub-white">
      <nav
        className="w-full h-20 bg-hub-white flex items-center justify-between px-6 border-b shadow-md fixed top-0">
        <div>
          <h1 className="text-black items-start">campus_hub</h1>
        </div>
        <div className="flex gap-6">
          <Link className="text-black" href="/">Entrar</Link>
          <Link className="text-hub-blue" href="/signup">Para instituições</Link>
        </div>
      </nav>

      <div className="flex min-h-full">
        <section className="w-1/2 mx-8 flex pt-32 flex-col">
          <h1 className="text-hub-blue text-6xl pt-28 font-semibold mb-3">Seja bem-vindo ao campus_hub</h1>
          <p className="text-hub-darkgray text-2xl font-normal mr-28">
            Aqui você pode ficar por dentro dos mais diversos eventos acadêmicos.
          </p>
          <div className="flex gap-2 mt-2">
            <Button
            onClick={() => handleSignInWithGoogle()}
              className="text-hub-blue rounded border-2 border-hub-blue py-2 px-4 hover:bg-hub-blue hover:text-hub-white hover:cursor-pointer">
              Entrar
            </Button>
            <Link
              className="
          text-hub-blue rounded border-2 border-hub-blue py-2 px-4 hover:bg-hub-blue hover:text-hub-white hover:cursor-pointer"
              href="/signup">
              Para instituições</Link>
          </div>
        </section>
        <section className="w-1/2 bg-slate-300 min-h-full">
          <img src="" alt="Imagem de fundo" />
        </section>
      </div>

    </main>
  )
}

export default HomePage
