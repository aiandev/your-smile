import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { AuthProvider } from "./app/contexts/auth"

const withProvider = App => {
  return props => (
    <NavigationContainer>
      <AuthProvider>
        <App {...props} />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default withProvider
