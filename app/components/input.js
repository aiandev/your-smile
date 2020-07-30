import React, { useState, useCallback } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"

function Input({
  onChange,
  background,
  color = "#fff",
  value = "",
  placeHolder = "",
  isSecure = false,
  withTypeSwitch = false,
  margin = 10,
  marginLeft = 10,
  marginRight = 10,
}) {
  const [isSecured, setIsSecured] = useState(isSecure)

  const toggle = useCallback(() => setIsSecured(!isSecured), [
    isSecured,
    setIsSecured,
  ])

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background, margin, marginLeft, marginRight },
      ]}
    >
      <TextInput
        style={[styles.input, { paddingRight: isSecure ? 60 : 20, color }]}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={color}
        secureTextEntry={isSecured}
        autoCapitalize="none"
        onChangeText={text => onChange(text)}
      />
      {withTypeSwitch && (
        <TouchableOpacity style={styles.inputTypeSwitch} onPress={toggle}>
          <Icon
            name={isSecured ? "eye" : "eye-slash"}
            size={20}
            color={color}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 60,
    maxHeight: 60,
    borderRadius: 30,
    margin: 10,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    padding: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  inputTypeSwitch: {
    width: 60,
    height: "100%",
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Input
