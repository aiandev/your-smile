import React from "react"
import { Text } from "react-native"
import styles from "./style"

import Card from "../Card"

function InfoBox({ question, info, ...props }) {
  return (
    <Card {...props}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.info}>{info}</Text>
    </Card>
  )
}

export default InfoBox
