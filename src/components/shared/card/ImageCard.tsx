'use server'
import { Card } from '@/src/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ImageCard = async ({ src, alt }: { src: string, alt: string }) => {

    return (
        <Card
            className='rounded border-none shadow-lg bg-hub-white relative overflow-hidden h-full w-1/2 flex flex-col justify-center items-center'
        >
            <Image
                src={src}
                alt={alt}
                width={600}
                height={600}
                className='w-full'
            />
            <p className='text-bt-lightgray mt-1 text-sm'>Designed by
                <a className='text-hub-blue cursor-pointer' target='_blank' href='https://br.freepik.com/'> Freepik</a>
            </p>
        </Card>
    )
}

export default ImageCard