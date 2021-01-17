import { StyleSheet } from "react-native"
import { WHITE } from "../../config/constants"

export default StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: WHITE,
  },
})
