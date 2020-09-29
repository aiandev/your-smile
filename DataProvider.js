import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

//* Contexts
import { UserDataProvider } from './app/contexts/user-data-context'
import { AuthenticationProvider } from './app/contexts/authentication-context'

const DataProvider = ({ children }) => {
  return (
    <NavigationContainer>
      <AuthenticationProvider>
        <UserDataProvider>{children}</UserDataProvider>
      </AuthenticationProvider>
    </NavigationContainer>
  )
}

export default DataProvider
