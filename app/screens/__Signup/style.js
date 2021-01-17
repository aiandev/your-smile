import { StyleSheet } from "react-native"
import { WIDTH, NAVY } from "../../config/constants"

export default StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    flexDirection: "row",
    height: 80,
  },
  footer: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerTitle: {
    // WIDTH / MODIFIER
    width: WIDTH / 3,
    textAlign: "center",
    color: NAVY,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 20,
  },
})
