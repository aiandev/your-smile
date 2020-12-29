import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { useAuth } from "../contexts/auth"
// ! Create a loader instead of displaying a loading text
import { Text, View } from "react-native"

// * PUBLIC
import Welcome from "./welcome"
import Login from "./login"
import Signup from "./signup"

// * PRIVATE
import Home from "./home"
import About from "./about"
import Account from "./account"
import Contact from "./contact"
import Gallery from "./gallery"
import Reach from "./reach"
import Services from "./services"
import Availability from "./availability"
import Testimonials from "./testimonials"

const Stack = createStackNavigator()

function Screens() {
  const { user, loading } = useAuth()

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!!!user ? (
        <>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="reach" component={Reach} />
          <Stack.Screen
            name="account"
            component={Account}
          />
          <Stack.Screen
            name="contact"
            component={Contact}
          />
          <Stack.Screen
            name="gallery"
            component={Gallery}
          />
          <Stack.Screen
            name="services"
            component={Services}
          />
          <Stack.Screen
            name="availability"
            component={Availability}
          />
          <Stack.Screen
            name="testimonials"
            component={Testimonials}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="welcome"
            component={Welcome}
          />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Screens
