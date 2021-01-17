import { StyleSheet } from "react-native"
import { HEIGHT } from "../../config/constants"

export default StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
  content: {
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: 100,
  },
  background: {
    width: "100%",
    height: 100,
    opacity: 0.25,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
})
