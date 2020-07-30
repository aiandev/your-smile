import React from "react"
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"

//* Components
import Screen from "../components/screen"
import Button from "../components/button"
import ButtonOutline from "../components/button-outline"

const { height } = Dimensions.get("window")

const Welcome = () => {
  const navigation = useNavigation()

  const navigate = path => {
    navigation.navigate(path)
  }

  return (
    <>
      <View style={styles.header}>
        <Icon name="tooth" color="#4C7EEC" size={80} />
      </View>
      <View style={styles.content}>
        <ButtonOutline title="Sign up" onPress={() => navigate("signup")} />
        <Button title="Log in" onPress={() => navigate("login")} />
      </View>
      <ImageBackground
        source={require("../static/images/welcome-background.png")}
        style={styles.background}
      />
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 100,
    opacity: 0.25,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  content: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    position: "absolute",
    bottom: 80,
  },
  header: {
    width: "100%",
    height: (height - 320) / 2,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Screen(Welcome)
