import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react"

import { auth } from "../config/firebase"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(
      email,
      password
    )
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    resetPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
