import React, { useState, useEffect, useContext } from 'react'
import { AsyncStorage } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

//* Config
import storage from './config/storage'

//* Contexts
import { UserDataContext } from './contexts/user-data-context'
import { AuthenticationContext } from './contexts/authentication-context'

//* Managers
import { login } from './managers/authenticationManager'

//* Screens
import Loading from './screens/loading'

//* Stacks
import AuthenticationStack from './stacks/authenticationStack'
import ServicesStack from './stacks/servicesStack'

const Stack = createStackNavigator()

const Screens = () => {
  //* Contexts
  const { setUserData } = useContext(UserDataContext)
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticationContext)

  //* States
  const [userLoaded, setUserLoaded] = useState(false)

  //? Authenticates the user with local storage data if found...
  const authenticate = async () => {
    //? Get item from local storage...
    const userData = await AsyncStorage.getItem(storage.authKey)
    if (!userData) return setUserLoaded(true)
    const { email, password } = JSON.parse(userData)

    //? log in with the available data...
    const response = await login(email, password)
    if (!response.success) return setUserLoaded(true)

    setUserData(response.user)
    setIsAuthenticated(true)
    setUserLoaded(true)
  }

  useEffect(() => {
    authenticate()
  }, [])

  if (!userLoaded) return <Loading />
  return (
    <Stack.Navigator initialRouteName={isAuthenticated ? 'services' : 'authentication'} screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name='services' component={ServicesStack} />
      <Stack.Screen name='authentication' component={AuthenticationStack} />
    </Stack.Navigator>
  )
}

export default Screens
