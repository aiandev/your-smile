import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { AuthProvider } from "./app/contexts/auth"
import { DatabaseProvider } from "./app/contexts/db"

const withProviders = App => {
  return props => (
    <NavigationContainer>
      <AuthProvider>
        <DatabaseProvider>
          <App {...props} />
        </DatabaseProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default withProviders
