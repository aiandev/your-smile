import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//* Config
import colors from '../config/colors'

const Title = ({ text = '', color = '#4C7EEC' }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
})

export default Title
