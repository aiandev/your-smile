import React from "react"
import Screens from "./app/screens/index"
import withProvider from "./provider"

function App() {
  return <Screens />
}

export default withProvider(App)
