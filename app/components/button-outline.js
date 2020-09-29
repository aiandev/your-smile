import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ onPress, title }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    borderWidth: 3.5,
    borderColor: '#4C7EEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#4C7EEC',
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
