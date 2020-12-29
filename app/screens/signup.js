import React from "react"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Svg, { Circle } from "react-native-svg"

//* Components
import Screen from "../components/screen"
import Button from "../components/button"
import LoaderView from "../components/loaderview"
import Input from "../components/input"
import KeyboardDismisser from "../components/keyboardDismisser"
import Logo from "../components/logo"

const { width, height } = Dimensions.get("window")

const Welcome = () => {
  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Svg
        width={width}
        height={(height - 320) / 2}
        style={{ position: "absolute", top: 0 }}
      >
        <Circle
          cx={width / 2}
          cy={-500}
          r={(height - 320) / 2 + 490}
          fill="#4C7EEC"
        />
      </Svg>
      <KeyboardDismisser>
        <View style={styles.content}>
          <View style={styles.header}>
            <Logo />
          </View>
          <View style={styles.nameContainer}>
            <Input
              placeHolder="First Name"
              background="#C6D3DF"
              color="#fff"
              marginRight={5}
            />
            <Input
              placeHolder="Last Name"
              background="#C6D3DF"
              color="#fff"
              marginLeft={5}
            />
          </View>
          <Input
            placeHolder="Email"
            background="#C6D3DF"
            color="#fff"
          />
          <Input
            placeHolder="Password"
            background="#C6D3DF"
            color="#fff"
            withTypeSwitch
            isSecure={true}
          />
          <Input
            placeHolder="Phone Number"
            background="#C6D3DF"
            color="#fff"
          />
          <Input
            placeHolder="Country"
            background="#C6D3DF"
            color="#fff"
          />
          {false ? (
            <LoaderView />
          ) : (
            <Button title="Sign Up" />
          )}
          <View style={styles.logInContainer}>
            <View style={styles.logInTitleContainer}>
              <Text style={styles.logInTitle}>
                Have An account?
              </Text>
            </View>
            <View style={styles.logInButtonContainer}>
              <Button
                title="Log In"
                onPress={() => navigation.navigate("login")}
              />
            </View>
          </View>
        </View>
      </KeyboardDismisser>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: (height - 320) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    flexDirection: "row",
    height: 80,
  },
  logInContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
  },
  logInButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logInTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logInTitle: {
    color: "#4C7EEC",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
})

export default Screen(Welcome, "#4C7EEC", "light-content")
