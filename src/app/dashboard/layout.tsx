import React from 'react'
import Aside from './_components/Aside'
import { instituitionIcons } from './_components/Aside/icons'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <Aside icons={instituitionIcons} />
            {children}
        </>
    )
}

export default DashboardLayout