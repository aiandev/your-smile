import { StyleSheet } from "react-native"
import {
  GREY,
  NAVY,
  STYLES,
  WHITE,
  WIDTH,
} from "../../config/constants"

export default StyleSheet.create({
  stats: {
    flexDirection: "row",
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statTitle: {
    color: NAVY,
    textTransform: "uppercase",
    fontWeight: "bold",
    // (WIDTH - PADDINGS - MARGINS) / COUNT / MODIFIER,
    fontSize: (WIDTH - 40) / 3 / 3,
  },
  statDescription: {
    color: GREY,
    // (WIDTH - PADDINGS - MARGINS) / COUNT / MODIFIER,
    fontSize: (WIDTH - 40) / 3 / 10,
    textAlign: "center",
  },
})
