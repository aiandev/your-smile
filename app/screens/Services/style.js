import { StyleSheet } from "react-native"
import { WIDTH, NAVY, WHITE } from "../../config/constants"

const serviceSizeModifier = 3.85

export default StyleSheet.create({
  title: {
    color: NAVY,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  servicesWrapper: {
    justifyContent: "center",
    marginBottom: 5,
  },
  services: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  service: {
    width: WIDTH / serviceSizeModifier,
    height: WIDTH / serviceSizeModifier,
    backgroundColor: NAVY,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  serviceTitle: {
    color: WHITE,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})
