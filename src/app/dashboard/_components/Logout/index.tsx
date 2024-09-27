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
            className='text-hub-blue border-2 rounded border-hub-blue bg-hub-white
          hover:text-hub-white hover:bg-hub-blue'>
            Voltar
          </AlertDialogCancel>
          <AlertDialogAction className='border-2 rounded text-hub-white bg-hub-blue border-hub-blue
                    hover:text-hub-blue hover:bg-hub-white'>
            <button onClick={() => logout()}>Sair</button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Logout