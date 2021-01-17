import React from "react"
import { View, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { WHITE, NAVY } from "../../config/constants"
import styles from "./style"

import Container from "../../components/Container"
import Wrapper from "../../components/Wrapper"
import Button from "../../components/Button"
import ButtonOutline from "../../components/ButtonOutline"
import Logo from "../../components/Logo"

const Welcome = () => {
  const { navigate } = useNavigation()

  return (
    <Wrapper>
      <View style={styles.header}>
        <Logo color={NAVY} />
      </View>
      <View style={styles.content}>
        <Container horizontal>
          <ButtonOutline
            text="Sign up"
            onPress={() => navigate("signup")}
            space={10}
          />
          <Button
            text="Log in"
            color={WHITE}
            onPress={() => navigate("login")}
          />
        </Container>
      </View>
      <ImageBackground
        source={require("../../static/images/welcome-background.png")}
        style={styles.background}
      />
    </Wrapper>
  )
}

export default Welcome
