import React from "react"
import { View, Text, StyleSheet } from "react-native"

//* Config
import colors from "../config/colors"

const Title = ({ text = "", color = "#222f3e" }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
})

export default Title
