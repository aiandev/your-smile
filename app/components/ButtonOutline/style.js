import { StyleSheet } from "react-native"
import { NAVY } from "../../config/constants"

export default StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    borderRadius: 30,
    borderWidth: 3.5,
    borderColor: NAVY,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: NAVY,
  },
})
