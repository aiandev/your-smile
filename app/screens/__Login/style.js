import { StyleSheet } from "react-native"
import { WIDTH } from "../../config/constants"

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
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
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 20,
  },
})
