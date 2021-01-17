import React from "react"
import { ImageBackground } from "react-native"
import { useDatabase } from "../../contexts/db"
import { LinearGradient } from "expo-linear-gradient"
import { WHITE, SHADOW } from "../../config/constants"
import styles from "./style"

const gradientOptions = {
  start: [1, 1],
  end: [1, 0],
  colors: [WHITE, SHADOW],
}

const GradientBackground = ({ uri = "", children }) => {
  const { data } = useDatabase()
  return (
    <ImageBackground
      blurRadius={2}
      source={{ uri: data.banner_image }}
      style={styles.container}
    >
      <LinearGradient
        {...gradientOptions}
        style={styles.background}
      >
        {children}
      </LinearGradient>
    </ImageBackground>
  )
}

export default GradientBackground
