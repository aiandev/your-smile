import React from 'react'
import { View, StyleSheet, StatusBar, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
//* Config
import colors from '../config/colors'

const statusbarDefaultColor = '#fff'

const CustomStatusBar = ({ color, barStyle }) => {
  return Platform.OS === 'android' ? (
    <StatusBar barStyle={barStyle} backgroundColor={color} />
  ) : (
    <View style={[styles.statusbar, { backgroundColor: color }]}>
      <StatusBar barStyle={barStyle} backgroundColor={color} />
    </View>
  )
}

const Screen = (WrappedComponent, color = statusbarDefaultColor, barStyle = 'dark-content') => props => {
  return (
    <>
      <CustomStatusBar color={color} barStyle={barStyle} />
      <View style={styles.container}>
        <WrappedComponent {...props} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  statusbar: {
    height: getStatusBarHeight(),
  },
})

export default Screen
