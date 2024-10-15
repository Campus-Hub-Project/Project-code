import React from 'react'
import Image from 'next/image'

interface Props {
    children: React.ReactNode,
    imagePath: string,
}

const SigninLayout = ({ children, imagePath }: Props) => {
    return (
        <main className='h-screen w-full bg-hub-white py-6 px-24 flex'>
            <section className='border-hub-middlegray shadow-lg flex-grow border-none rounded px-0 flex h-full'>
                <div className='w-1/2 rounded'>
                    <Image src={imagePath} alt={''} width={2000} height={2000} />
                    <p className='-mt-6 pl-3 text-xs text-hub-lightgray'>Designed by
                        <a href='http://br.freepik.com/' target='_blank' className='text-hub-blue'> freepik</a>
                    </p>
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    {children}
                </div>
            </section>
        </main>
    )
}

export default SigninLayout
