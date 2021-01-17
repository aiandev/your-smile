import React, { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useDatabase } from "../../contexts/db"
import * as MailComposer from "expo-mail-composer"
import { NAVY, WHITE, GREY } from "../../config/constants"
import styles from "./style"

import Wrapper from "../../components/Wrapper"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import KeyboardDismisser from "../../components/KeyboardDismisser"
import Logo from "../../components/Logo"
import Container from "../../components/Container"

function InfoMenu({ title, description }) {
  return (
    <Card style={[styles.info]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>{title}</Text>
          <Text style={styles.infoDescription}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </Card>
  )
}

const Contact = () => {
  const { data } = useDatabase()
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  async function sendMail() {
    const available = await MailComposer.isAvailableAsync()
    if (!available) return

    await MailComposer.composeAsync({
      subject: `${name} says`,
      body: message,
      recipients: [data.contact.email],
    })

    setName("")
    setMessage("")
  }

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={
          Platform.OS === "ios" ? "padding" : "height"
        }
        style={styles.container}
      >
        <Navbar title="Contact Us" withBackButton />
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardDismisser>
            <>
              <View style={styles.header}>
                <Logo color={NAVY} />
              </View>
              <View style={styles.infoWrapper}>
                <InfoMenu
                  title="Phone Number"
                  description={data.contact.phone_number}
                />
                <InfoMenu
                  title="Email"
                  description={data.contact.email}
                />
              </View>
              <View style={styles.infoWrapper}>
                <InfoMenu
                  title="Mobile Number"
                  description={data.contact.mobile_number}
                />
                <InfoMenu
                  title="Address"
                  description={data.contact.address}
                />
              </View>
              <Container horizontal>
                <Card space={10}>
                  <Text style={styles.formTitle}>
                    Send Your Message
                  </Text>
                  <Input
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    color={GREY}
                    space={20}
                  />
                  <Input
                    placeholder="Message"
                    value={message}
                    onChangeText={setMessage}
                    color={GREY}
                    space={20}
                  />
                  <Button
                    text="Send Message"
                    onPress={sendMail}
                    color={WHITE}
                  />
                </Card>
              </Container>
            </>
          </KeyboardDismisser>
        </ScrollView>
      </KeyboardAvoidingView>
    </Wrapper>
  )
}

export default Contact
