import { StyleSheet } from "react-native"
import {
  GREY,
  WHITE,
  WIDTH,
  STYLES,
} from "../../config/constants"

export default StyleSheet.create({
  logo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: WHITE,
  },
  description: {
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: "bold",
    color: WHITE,
  },
  categories: {
    width: WIDTH,
    height: WIDTH,
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  category: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: WHITE,
    ...STYLES.shadow,
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 12,
    color: GREY,
  },
  categoryIcon: {
    marginBottom: 10,
  },
})
