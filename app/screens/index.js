import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
// import { useAuth } from "../contexts/auth"
import { useDatabase } from "../contexts/db"

// ! Create a loader instead of displaying a loading text
import { Text, View } from "react-native"

// * PUBLIC
// import Welcome from "./Welcome"
// import Login from "./Login"
// import Signup from "./Signup"

// * PRIVATE
import Home from "./Home"
import About from "./About"
// import Account from "./Account"
import Contact from "./Contact"
import Gallery from "./Gallery"
import Reach from "./Reach"
import Services from "./Services"
import Availability from "./Availability"
import Loading from "./Loading"

const Stack = createStackNavigator()

function Screens() {
  // const { user, loading } = useAuth()
  const { loading } = useDatabase()
  if (loading) return <Loading />

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="about" component={About} />
      <Stack.Screen name="reach" component={Reach} />
      {/* <Stack.Screen name="account" component={Account} /> */}
      <Stack.Screen name="contact" component={Contact} />
      <Stack.Screen name="gallery" component={Gallery} />
      <Stack.Screen name="services" component={Services} />
      <Stack.Screen
        name="availability"
        component={Availability}
      />
      {/* <Stack.Screen
            name="welcome"
            component={Welcome}
          />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
        </> */}
    </Stack.Navigator>
  )
}

export default Screens
