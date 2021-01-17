import { StyleSheet } from "react-native"
import {
  WIDTH,
  WHITE,
  SHADOW,
} from "../../config/constants"

export default StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    // WIDTH / MODIFIER
    height: WIDTH / 1.8,
  },
  text: {
    width: "100%",
    paddingHorizontal: 10,
    fontSize: 30,
    color: WHITE,
    textTransform: "uppercase",
    fontWeight: "bold",
    textShadowColor: SHADOW,
    textShadowRadius: 40,
    textAlign: "center",
  },
})
