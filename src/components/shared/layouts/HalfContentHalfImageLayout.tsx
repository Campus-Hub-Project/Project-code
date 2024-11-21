'use server'

import React from 'react'

const HalfContentHalfImageLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='bg-hub-white h-screen lg:w-11/12 flex py-12'>
            {children}
        </section>
    )
}

export default HalfContentHalfImageLayout