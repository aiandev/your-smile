import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

//* Screens
import Home from "../screens/home"

const Stack = createStackNavigator()

const ServicesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}

export default ServicesStack
