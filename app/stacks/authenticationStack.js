import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//* Components
import Welcome from '../screens/welcome'
import Login from '../screens/login'
import Signup from '../screens/signup'

const Stack = createStackNavigator()

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='welcome'
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={Signup} />
      <Stack.Screen name='welcome' component={Welcome} />
    </Stack.Navigator>
  )
}

export default AuthenticationStack
