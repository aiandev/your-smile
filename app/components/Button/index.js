import React from "react"
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { BLUE, ABYSS } from "../../config/constants"
import styles from "./style"

const gradientOptions = {
  start: [0, 1],
  end: [1, 0],
  colors: [BLUE, ABYSS],
}

function Button({
  text,
  loading,
  backgroundColor,
  color,
  space = 0,
  ...rest
}) {
  function Content() {
    return loading ? (
      <ActivityIndicator color={color} />
    ) : (
      <Text style={[styles.text, { color }]}>{text}</Text>
    )
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          marginBottom: space,
        },
      ]}
      {...rest}
    >
      {backgroundColor ? (
        <Content />
      ) : (
        <LinearGradient
          {...gradientOptions}
          style={styles.background}
        >
          <Content />
        </LinearGradient>
      )}
    </TouchableOpacity>
  )
}

export default Button
