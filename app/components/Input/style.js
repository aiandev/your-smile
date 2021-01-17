import { StyleSheet } from "react-native"
import { WHITE } from "../../config/constants"

export default StyleSheet.create({
  container: {
    minHeight: 60,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "bold",
  },
  inputTypeSwitch: {
    width: 60,
    height: "100%",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
})
