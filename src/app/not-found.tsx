'use server'

import React from 'react'
import NoContentLayout from '../components/shared/layouts/NoContentLayout'

const NotFoundPage = async () => {
  return <NoContentLayout 
    src='/images/not-found.jpg'
    alt='Imagem mostrando duas pessoas sem saber de algo'
    span='Parece que você viajou tanto que chegou em uma página que não existe...'
    isNotFound
  />
}

export default NotFoundPage