import { StyleSheet } from "react-native"
import { GREY, LIGHT, NAVY } from "../../config/constants"

export default StyleSheet.create({
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 15,
    color: NAVY,
    marginBottom: 10,
  },
  availabilities: { marginBottom: 10 },
  availability: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  day: {
    fontWeight: "bold",
    fontSize: 13,
    color: GREY,
    textTransform: "uppercase",
  },
  time: {
    fontSize: 13,
    color: LIGHT,
    fontWeight: "bold",
  },
  lunch: {
    padding: 0,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    color: GREY,
  },
  lunchTitle: {
    color: NAVY,
  },
})
