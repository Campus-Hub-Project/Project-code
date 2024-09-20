import { redirect } from 'next/navigation'
import React from 'react'
import { checkIfIsAuthenticated } from '../lib/isAuthenticated'

const DashboardPage = async () => {
  const isAuthenticated = await checkIfIsAuthenticated()
 
  if (!isAuthenticated) {
    redirect('/')
  } else {
    return (
      <div>DashboardPage</div>
    )
  }
}

export default DashboardPage