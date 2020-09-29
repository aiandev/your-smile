import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const LoaderView = ({ background, color = '#fff' }) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: background }]}>
        {background ? (
          <ActivityIndicator size='large' color={color} />
        ) : (
          <LinearGradient start={[0, 1]} end={[1, 0]} style={styles.background} colors={['#5f27cd', '#48dbfb']}>
            <ActivityIndicator size='large' color={color} />
          </LinearGradient>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#576574',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  wrapper: {
    width: '100%',
    height: 80,
    padding: 10,
  },
})

export default LoaderView
