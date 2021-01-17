import { StyleSheet } from "react-native"
import {
  STYLES,
  WHITE,
  NAVY,
  WIDTH,
  GREY,
} from "../../config/constants"

export default StyleSheet.create({
  mapWrapper: {
    height: WIDTH,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
    overflow: "hidden",
    ...STYLES.shadow,
  },
  map: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: NAVY,
    marginBottom: 10,
  },
  address: {
    color: GREY,
    marginBottom: 10,
  },
})
