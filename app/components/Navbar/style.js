import { StyleSheet, Platform } from "react-native"
import { GREY, STATUS_HEIGHT } from "../../config/constants"

export default StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    marginTop: Platform.OS === "ios" ? STATUS_HEIGHT : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: GREY,
  },
})
