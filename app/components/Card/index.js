import React from "react"
import { View } from "react-native"
import styles from "./style"

function Card({ children, style, space = 0, ...rest }) {
  return (
    <View
      style={[
        styles.card,
        { marginBottom: space },
        ...(style || []),
      ]}
      {...rest}
    >
      {children}
    </View>
  )
}

export default Card
