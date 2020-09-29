import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Button = ({ background, onPress, title = '', color = '#fff' }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: background }]}>
        {background ? (
          <Text style={[styles.title, { color }]}>{title}</Text>
        ) : (
          <LinearGradient start={[0, 1]} end={[1, 0]} style={styles.background} colors={['#5f27cd', '#48dbfb']}>
            <Text style={[styles.title, { color }]}>{title}</Text>
          </LinearGradient>
        )}
      </TouchableOpacity>
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
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  wrapper: {
    width: '100%',
    height: 80,
    padding: 10,
  },
})

export default Button
