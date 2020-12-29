import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native"

import { LinearGradient } from "expo-linear-gradient"

//* Config
import config from "../config/config.json"

//* Components
import Navbar from "../components/navbar"
import Screen from "../components/screen"

const Testimonal = ({ profilePicture, title }) => (
  <View style={styles.testimonalContainer}>
    <View style={styles.testimonal}>
      <LinearGradient
        style={styles.testimonialBackground}
        start={[0, 1]}
        end={[1, -1]}
        colors={["#5f27cd", "#48dbfb"]}
      >
        <View style={styles.testimonalProfileContainer}>
          <ImageBackground
            style={{ flex: 1 }}
            borderRadius={5}
            source={{
              uri:
                profilePicture ||
                config.default_profile_picture,
            }}
          />
        </View>
        <View style={styles.testimonialTitleContainer}>
          <Text style={styles.testimonalTitle}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </View>
  </View>
)

const Testimonials = () => {
  return (
    <>
      <Navbar
        color="#8395a7"
        title="Testimonials"
        withBackButton
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 5 }}>
          <Testimonal
            profilePicture={config.default_profile_picture}
            title="- Test Testimonal 1"
          />
          <Testimonal
            profilePicture={config.default_profile_picture}
            title="- Test Testimonal 2"
          />
          <Testimonal
            profilePicture={config.default_profile_picture}
            title="- Test Testimonal 3"
          />
          <Testimonal
            profilePicture={config.default_profile_picture}
            title="- Test Testimonal 4"
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  testimonalContainer: {
    padding: 5,
    width: "100%",
    height: 100,
  },
  testimonal: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  testimonialBackground: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  testimonalProfileContainer: {
    width: 90,
    height: "100%",
    overflow: "hidden",
    padding: 10,
  },
  testimonialTitleContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  testimonalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#fff",
  },
})

export default Screen(Testimonials)
