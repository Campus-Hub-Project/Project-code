'use server'
import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from '@/components/ui/card'
import Image from 'next/image'

import mainCss from '@/styles/Main.module.css'
import LoginInstituitionForm from '@/components/shared/forms/login-instituition-form'

const SigninPage = () => {
    return (
        <main className={mainCss['main-tag-config']}>
            <section className='border-hub-middlegray shadow-lg flex-grow border-none rounded px-0 flex h-full'>
                <div className='w-1/2 rounded'>
                    <Image src='/images/signin-page-image.jpg' alt={''} width={2000} height={2000} />
                    <p className='-mt-6 pl-3 text-xs text-hub-lightgray'>Designed by
                        <a href='http://br.freepik.com/' target='_blank' className='text-hub-blue'> freepik</a>
                    </p>
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <Card className='border-none mx-24 bg-hub-white shadow-none'>
                        <CardHeader className='text-center'>
                            <CardTitle className='text-3xl font-semibold text-hub-blue'>
                                Login
                            </CardTitle>
                            <CardDescription className='mx-4 font-medium text-base text-hub-middlegray'>
                                Insira o e-mail da instituição. Você receberá uma mensagem de confirmação para continuar.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <LoginInstituitionForm />
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    )
}

export default SigninPage