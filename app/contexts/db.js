import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react"
import { db } from "../config/firebase"

const DatabaseContext = createContext()

export function useDatabase() {
  return useContext(DatabaseContext)
}

export function DatabaseProvider({ children }) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection("doctors")
      // Needs update in future
      .doc("Mohanad")
      .onSnapshot(document => {
        setData(document.data())
        setLoading(false)
      })
  }, [])

  const value = { data, loading }

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  )
}
