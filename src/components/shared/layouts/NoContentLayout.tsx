'use server'

import Image from 'next/image'
import React from 'react'

import ReturnButton from '../button/ReturnButton'

const NoContentLayout = async ({ src, alt, span, isNotFound = false }: { src: string, alt: string, span: string, isNotFound?: boolean }) => {
    let css = 'w-4/5 h-full py-12 flex gap-8 justify-center items-center'
    if (!isNotFound) css = `${css} ml-36`

    return (
        <div className={css}>
            <div className='h-1/2 w-1/3 flex flex-col items-center justify-center gap-2'>
                {isNotFound && <span className='text-center font-semibold text-3xl text-hub-blue'>404 - Conteúdo não encontrado</span>}
                <Image
                    src={src}
                    alt={alt}
                    width={425} height={400} />
                <span className='text-center text-sm text-hub-middlegray'>
                    {span}
                </span>
                {isNotFound && <ReturnButton>Voltar à página anterior</ReturnButton>}
            </div>
        </div>
    )
}

export default NoContentLayout