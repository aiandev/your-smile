import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const Button = ({ background, onPress, title = "", color = "#fff" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: background }]}
    >
      {background ? (
        <Text style={[styles.title, { color }]}>{title}</Text>
      ) : (
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          style={styles.background}
          colors={["#5f27cd", "#48dbfb"]}
        >
          <Text style={[styles.title, { color }]}>{title}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    borderRadius: 30,
    overflow: "hidden",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})

export default Button
