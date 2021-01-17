import { StyleSheet } from "react-native"
import { GREY, NAVY, WIDTH } from "../../config/constants"

export default StyleSheet.create({
  gallery: {
    flex: 1,
    padding: 10,
  },
  pictureWrapper: {
    width: "100%",
    // HALF WIDTH - PADDINGS
    height: WIDTH / 2 - 20,
  },
  picture: {
    flex: 1,
  },
  info: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
    color: NAVY,
  },
  description: {
    color: GREY,
  },
})
