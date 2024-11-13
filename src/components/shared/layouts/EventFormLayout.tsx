'use server'

import React from 'react'

const EventFormLayout = async ({ children }: { children: React.ReactNode }) => {
    return <div className='w-4/5 min-h-screen py-12 ml-36 flex justify-center'>{children}</div>
}

export default EventFormLayout