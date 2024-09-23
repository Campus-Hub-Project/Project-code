import { redirect } from 'next/navigation'
import React from 'react'

import isAuthenticated from '@/lib/auth/isAuthenticated'

const DashboardPage = async () => {
  const isAuth = await isAuthenticated()

  if (!isAuth) {
    redirect('/')
  } else {
    return (
      <div>
        
      </div>
    )
  }
}

export default DashboardPage