import React from "react"
import Screens from "./app/screens"
import DataProvider from "./DataProvider"

export default function App() {
  return (
    <DataProvider>
      <Screens />
    </DataProvider>
  )
}
