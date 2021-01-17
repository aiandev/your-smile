import { Dimensions, StyleSheet } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"

export const WIDTH = Dimensions.get("window").width
export const HEIGHT = Dimensions.get("window").height
export const STATUS_HEIGHT = getStatusBarHeight()

// COLORS
export const WHITE = "#ffffff"
export const LIGHT = "#c8d6e5"
export const GREY = "#8395a7"
export const BLUE = "#00a8cc"
export const NAVY = "#0c7b93"
export const ABYSS = "#142850"
export const BLACK = "#000000"
export const SHADOW = "rgba(0, 0, 0, .25)"

// STYLES
export const STYLES = StyleSheet.create({
  shadow: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
})
