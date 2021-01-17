import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import { GREY } from "../../config/constants"
import { useNavigation } from "@react-navigation/native"
import styles from "./style"

const Navbar = ({
  withBackButton = false,
  title,
  icon,
  onIconPress,
}) => {
  const { goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={!withBackButton}
        onPress={goBack}
        style={styles.titleContainer}
      >
        {withBackButton && (
          <Icon name="arrow-left" size={25} color={GREY} />
        )}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {icon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={icon} color={GREY} size={25} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Navbar
