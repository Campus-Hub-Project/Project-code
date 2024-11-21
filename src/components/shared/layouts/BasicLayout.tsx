'use server'

import React from 'react'

const BasicLayout = async ({ children }: { children: React.ReactNode }) => {

    return <section className='w-full min-h-screen flex flex-col justify-center items-center'>{children}</section>
}

export default BasicLayout