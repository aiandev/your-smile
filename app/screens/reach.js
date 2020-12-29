import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { WebView } from "react-native-webview"

//* Config
import api from "../config/api"

//* Components
import Navbar from "../components/navbar"
import Title from "../components/title"
import Paragraph from "../components/paragraph"
import Button from "../components/button"
import Screen from "../components/screen"

const ReachUs = () => {
  return (
    <>
      <Navbar
        title="Reach Us"
        withBackButton
        color="#8395a7"
      />

      <WebView
        source={{ html: api.map }}
        scrollEnabled={false}
      />
      <View style={styles.location}>
        <Title text="Here we are" />
        <Paragraph text="Chisinau" />
        <Button title="Book An Appointment" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  location: {
    width: "100%",
    backgroundColor: "#fff",
  },
})

export default Screen(ReachUs)
