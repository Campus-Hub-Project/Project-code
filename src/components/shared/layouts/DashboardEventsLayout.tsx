'use server'

import React from 'react'

const DashboardEventsLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-4/5 min-h-screen py-12 px-20 grid grid-cols-2 gap-12 justify-items-center'>
            {children}
        </section>
    )
}

export default DashboardEventsLayout