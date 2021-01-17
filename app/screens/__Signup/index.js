import React, { useState } from "react"
import { Text, View, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NAVY, WHITE } from "../../config/constants"
import { useAuth } from "../../contexts/auth"
import styles from "./style"

import Button from "../../components/Button"
import Input from "../../components/Input"
import KeyboardDismisser from "../../components/KeyboardDismisser"
import Logo from "../../components/Logo"
import Container from "../../components/Container"

const Signup = () => {
  const navigation = useNavigation()
  const { signup } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function signupHandler() {
    // TODO: VAlIDATION
    if (!username || !email || !password) return
    setLoading(true)
    try {
      const result = await signup(email, password)
      await result.user.updateProfile({
        displayName: username,
      })
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardDismisser>
        <>
          <View style={styles.header}>
            <Logo color={NAVY} />
          </View>
          <Container horizontal>
            <Input
              placeholder="Username"
              color={NAVY}
              value={username}
              onChangeText={username =>
                setUsername(username)
              }
              space={20}
            />
            <Input
              placeholder="Email"
              color={NAVY}
              value={email}
              onChangeText={email => setEmail(email)}
              space={20}
            />
            <Input
              placeholder="Password"
              color={NAVY}
              withTypeSwitch
              isSecure={true}
              value={password}
              onChangeText={password =>
                setPassword(password)
              }
              space={20}
            />
            <Button
              text="Sign Up"
              color={WHITE}
              loading={loading}
              onPress={signupHandler}
              space={20}
            />
            <View style={styles.footer}>
              <Text style={styles.footerTitle}>
                Have An account?
              </Text>
              <Button
                text="Log In"
                color={WHITE}
                onPress={() => navigation.navigate("login")}
              />
            </View>
          </Container>
        </>
      </KeyboardDismisser>
    </ScrollView>
  )
}

export default Signup
