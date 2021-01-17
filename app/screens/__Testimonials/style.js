import { StyleSheet } from "react-native"
import { STYLES } from "../../config/constants"

export default StyleSheet.create({
  testimonalContainer: {
    padding: 5,
    width: "100%",
    height: 100,
  },
  testimonal: {
    flex: 1,
    borderRadius: 10,
    ...STYLES.shadow,
  },
  testimonialBackground: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  testimonalProfileContainer: {
    width: 90,
    height: "100%",
    overflow: "hidden",
    padding: 10,
  },
  testimonialTitleContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  testimonalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#fff",
  },
})
