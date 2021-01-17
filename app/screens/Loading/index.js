import React from "react"
import { ActivityIndicator, View } from "react-native"
import { NAVY } from "../../config/constants"
import styles from "./style"

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={NAVY} />
    </View>
  )
}

export default Loading
