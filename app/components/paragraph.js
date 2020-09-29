import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//* Config
import colors from '../config/colors'

const Paragraph = ({ text = '', color = '#8395a7' }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
})

export default Paragraph
