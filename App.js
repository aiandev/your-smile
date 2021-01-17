import React from "react"
import Screens from "./app/screens/index"
import withProviders from "./provider"
import { StatusBar } from "react-native"

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Screens />
    </>
  )
}

export default withProviders(App)
