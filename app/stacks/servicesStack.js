import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//* Screens
import Home from '../screens/home'
import Account from '../screens/account'
import Availability from '../screens/availability'
import ReachUs from '../screens/reach-us'
import ContactUs from '../screens/contact-us'
import AboutUs from '../screens/about-us'
import Services from '../screens/services'
import Testimonials from '../screens/testimonials'
import Gallery from '../screens/gallery'

const Stack = createStackNavigator()

const ServicesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='account' component={Account} />
      <Stack.Screen name='reach-us' component={ReachUs} />
      <Stack.Screen name='contact-us' component={ContactUs} />
      <Stack.Screen name='availability' component={Availability} />
      <Stack.Screen name='about-us' component={AboutUs} />
      <Stack.Screen name='services' component={Services} />
      <Stack.Screen name='testimonials' component={Testimonials} />
      <Stack.Screen name='gallery' component={Gallery} />
    </Stack.Navigator>
  )
}

export default ServicesStack
