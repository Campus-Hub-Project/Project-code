'use server'

import React from 'react'

const NoEventsText = async ({ children }: { children: React.ReactNode }) =>
    <span className='text-center text-3xl text-grays-four font-semibold lg:mt-48'>{children}</span>


export { NoEventsText }
