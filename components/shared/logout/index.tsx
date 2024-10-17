'use client'
import React from 'react'

import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import logout from '@/lib/auth/logout'

import btnCss from '@/styles/Button.module.css'

interface Props {
  children: React.ReactNode
}

const Logout = ({ children }: Props) => {

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='ghost'
          className='text-center hover:bg-hub-white hover:text-hub-blue'>{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='rounded bg-hub-white'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-hub-blue'>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Você está prestes a sair de sua conta, é isso mesmo que voce deseja?
            Seus dados serão salvos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
          className={`${btnCss['basic-button-config']}`}>
            Voltar
          </AlertDialogCancel>
          <AlertDialogAction className={`${btnCss['reverse-basic-button-config']}`}>
            <button onClick={() => logout()}>Sair</button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Logout