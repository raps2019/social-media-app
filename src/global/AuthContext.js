import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext();

//Hook for Child Components to get auth object
//and re-render when it changes
export const useAuth = () => {
  return useContext(AuthContext)
}

//Provider component that wraps app and makes auth object
//Available to any child component that calls useAuth().
export const AuthProvider = ({children}) => {
  const [ loading, setLoading ] = useState(true)
  const [ currentUser, setCurrentUser ] = useState(null);

  const signup = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
    // return await result.user.updateProfile({
    //   displayName: username
    // });
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
  }

  const logout = () => {
    return auth.signOut();
  }

  const updateUserame = (username) => {
    return auth.user.displayName(username)
  }

  

  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( (user) => {
      setCurrentUser(user)
      setLoading(false);
    })
    console.log(currentUser)
    return unsubscribe;
  }, [])

  const value= {
    currentUser,
    signup,
    login,
    resetPassword,
    logout,
    updateUserame,
    loading,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}