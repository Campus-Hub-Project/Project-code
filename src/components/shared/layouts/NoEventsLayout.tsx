'use server'

import Image from 'next/image'
import React from 'react'

const NoEventsLayout = async ({ src, alt, span }: { src: string, alt: string, span: string }) => {
    return (
        <div className='w-4/5 h-full py-12 ml-36 flex gap-8 justify-center items-center'>
            <div className='h-1/2 w-1/3 flex flex-col items-center justify-center'>
                <Image
                    src={src}
                    alt={alt}
                    width={425} height={400} />
                <span className='text-center text-sm text-hub-middlegray'>
                    {span}
                </span>
            </div>
        </div>)
}

export default NoEventsLayout