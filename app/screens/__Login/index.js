import React, { useState } from "react"
import { Text, View, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../contexts/auth"
import {
  ABYSS,
  BLUE,
  NAVY,
  WHITE,
} from "../../config/constants"
import styles from "./style"

import Container from "../../components/Container"
import Button from "../../components/Button"
import Input from "../../components/Input"
import KeyboardDismisser from "../../components/KeyboardDismisser"
import Logo from "../../components/Logo"

const Login = () => {
  const navigation = useNavigation()
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function loginHandler() {
    // TODO: VAlIDATION
    if (!email || !password) return
    setLoading(true)
    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <LinearGradient
      style={styles.background}
      colors={[BLUE, ABYSS]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardDismisser>
          <>
            <View style={styles.header}>
              <Logo />
            </View>
            <Container horizontal>
              <Input
                placeholder="Email"
                background={WHITE}
                color={WHITE}
                value={email}
                onChangeText={email => setEmail(email)}
                space={20}
              />
              <Input
                placeholder="Password"
                background={WHITE}
                color={WHITE}
                isSecure
                withTypeSwitch
                value={password}
                onChangeText={password =>
                  setPassword(password)
                }
                space={20}
              />
              <Button
                text="Log In"
                backgroundColor={WHITE}
                color={NAVY}
                loading={loading}
                onPress={loginHandler}
                space={20}
              />
              <View style={styles.footer}>
                <Text style={styles.footerTitle}>
                  New User?
                </Text>
                <Button
                  text="Sign Up"
                  backgroundColor={WHITE}
                  color={NAVY}
                  onPress={() =>
                    navigation.navigate("signup")
                  }
                />
              </View>
            </Container>
          </>
        </KeyboardDismisser>
      </ScrollView>
    </LinearGradient>
  )
}

export default Login
