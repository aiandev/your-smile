import { StyleSheet } from "react-native"
import { GREY, NAVY } from "../../config/constants"

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  infoWrapper: {
    width: "100%",
    height: 60,
    paddingHorizontal: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  info: {
    flex: 1,
    marginHorizontal: 5,
  },
  infoContent: {
    justifyContent: "space-around",
  },
  infoTitle: {
    fontWeight: "bold",
    color: NAVY,
  },
  infoDescription: {
    color: GREY,
  },
  formTitle: {
    fontWeight: "bold",
    color: NAVY,
    marginBottom: 10,
  },
})
