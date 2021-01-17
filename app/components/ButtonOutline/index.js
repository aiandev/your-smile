import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./style"

const Button = ({ text, space = 0, ...rest }) => (
  <TouchableOpacity
    style={[styles.button, { marginBottom: space }]}
    {...rest}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

export default Button
