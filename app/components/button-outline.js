import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    borderRadius: 30,
    margin: 10,
    borderWidth: 3.5,
    borderColor: "#4C7EEC",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#4C7EEC",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})

export default Button
