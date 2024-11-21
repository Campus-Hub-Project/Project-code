'use server'

import React from 'react'

const BgImageLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <section className='relative bg-center w-full h-full
            bg-[url(https://media.licdn.com/dms/image/v2/C4D1BAQGf9-MRf5UTZA/company-background_10000/company-background_10000/0/1583534442438/facens_cover?e=2147483647&v=beta&t=PrqI0PCdk35x6yT3Q-uZPX983Tyci3rvVKiLnRWNBg8)]
        flex flex-col justify-center'>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {children}
        </section>
    )
}

export default BgImageLayout