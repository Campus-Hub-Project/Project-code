'use server'

import React from 'react'

const DashboardEventsLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-4/5 min-h-screen py-12 ml-36 grid grid-cols-2 gap-12'>
            {children}
        </section>
    )
}

export default DashboardEventsLayout