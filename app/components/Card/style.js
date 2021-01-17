import { StyleSheet } from "react-native"
import { STYLES, WHITE } from "../../config/constants"

export default StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
    ...STYLES.shadow,
  },
})
