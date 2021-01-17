import React, { useState, useCallback } from "react"
import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { WHITE } from "../../config/constants"
import styles from "./style"

function Input({
  color = WHITE,
  withTypeSwitch = false,
  space = 0,
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(
    !withTypeSwitch
  )

  const toggle = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible, setIsVisible])

  return (
    <View
      style={[styles.container, { marginBottom: space }]}
    >
      <TextInput
        style={[
          styles.input,
          {
            color,
            borderColor: color,
            paddingRight: withTypeSwitch ? 50 : 20,
          },
        ]}
        placeholderTextColor={color}
        autoCapitalize="none"
        secureTextEntry={!isVisible}
        {...rest}
      />
      {withTypeSwitch && (
        <TouchableOpacity
          style={styles.inputTypeSwitch}
          onPress={toggle}
        >
          <Icon
            name={isVisible ? "eye" : "eye-slash"}
            size={20}
            color={color}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Input
