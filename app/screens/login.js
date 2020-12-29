import React from "react"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"

//* Components
import Screen from "../components/screen"
import Button from "../components/button"
import LoaderView from "../components/loaderview"
import InputOutline from "../components/input-outline"
import KeyboardDismisser from "../components/keyboardDismisser"
import Logo from "../components/logo"

const { height } = Dimensions.get("window")

const Login = () => {
  const navigation = useNavigation()
  return (
    <LinearGradient
      style={styles.background}
      colors={["#48dbfb", "#5f27cd"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardDismisser>
          <>
            <View style={styles.header}>
              <Logo />
            </View>
            <InputOutline
              placeHolder="Email"
              background="#fff"
              color="#fff"
            />
            <InputOutline
              placeHolder="Password"
              background="#fff"
              color="#fff"
              isSecure
              withTypeSwitch
            />
            {false ? (
              <LoaderView
                background="#fff"
                color="#4C7EEC"
              />
            ) : (
              <Button
                title="Log In"
                background="#fff"
                color="#4C7EEC"
              />
            )}
            <View style={styles.signUpContainer}>
              <View style={styles.signUpTitleContainer}>
                <Text style={styles.signUpTitle}>
                  New User?
                </Text>
              </View>
              <View style={styles.signUpButtonContainer}>
                <Button
                  title="Sign Up"
                  background="#fff"
                  color="#4C7EEC"
                  onPress={() =>
                    navigation.navigate("signup")
                  }
                />
              </View>
            </View>
          </>
        </KeyboardDismisser>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: (height - 320) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
  },
  signUpButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  signUpTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpTitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
})

export default Screen(Login, "#48dbfb", "light-content")
