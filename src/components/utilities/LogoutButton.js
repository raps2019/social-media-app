import React from 'react'
import { useAuth } from '../../global/AuthContext';
import { useHistory } from 'react-router';

const LogoutButton = () => {

  const { logout } = useAuth()
  const history = useHistory();

  const handleLogout = () => {
    try {
      logout();
      history.push('/login');
    } catch(error) {
      console.log(error.message)
    }
  }
  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}

export default LogoutButton
