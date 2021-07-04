import React from 'react'
import { useAuth } from '../../global/AuthContext'
import Navbar from '../navbar/Navbar'

const Dashboard = () => {

  const { currentUser } = useAuth()
  
  return (
    <div>
    <Navbar></Navbar>
    
      {currentUser.email}
      {currentUser.displayName}
    </div>
  )
}

export default Dashboard
