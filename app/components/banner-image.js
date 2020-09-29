import React from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

const BannerImage = ({ src = '', withGradientEffect = true, children }) => {
  return (
    <ImageBackground blurRadius={2} source={{ uri: src || null }} style={styles.container}>
      {withGradientEffect ? (
        <LinearGradient start={[0, 1]} end={[0, -0.5]} colors={['rgb(255, 255, 255)', 'rgba(0, 0, 0, 0.35)']} style={styles.background}>
          {children}
        </LinearGradient>
      ) : (
        children
      )}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    width,
    height: width / 1.75,
  },
  text: {
    width: '100%',
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0, 0, 0.5)',
    textShadowRadius: 40,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
})

export default BannerImage
