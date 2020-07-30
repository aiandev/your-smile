import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Errors = ({ errorList = [] }) => {
  const errors = errorList.map((error, index) => (
    <Text key={index} style={styles.text}>
      {error}
    </Text>
  ))
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>{errors}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 10,
  },
  content: {
    width: "100%",
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ee5253",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default Errors
