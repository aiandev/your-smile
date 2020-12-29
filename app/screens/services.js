import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

//* Config
import config from "../config/config.json"

//* Components
import Navbar from "../components/navbar"
import Screen from "../components/screen"

const { width } = Dimensions.get("window")

const Services = () => {
  const myConfig = config.screens.services
  return (
    <>
      <Navbar
        title="Services"
        color="#8395a7"
        withBackButton
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {myConfig["header-title"]}
            </Text>
            <Text style={styles.headerDescription}>
              {myConfig["header-description"]}
            </Text>
          </View>
          <View style={styles.servicesContainer}>
            <Text style={styles.title}>
              {myConfig["services-title"]}
            </Text>
            <View style={styles.services}>
              {myConfig.services.map((item, index) => (
                <View
                  key={index}
                  style={styles.serviceContainer}
                >
                  <View style={styles.service}>
                    <LinearGradient
                      style={styles.serviceBackground}
                      start={[0, 1]}
                      end={[1, -1]}
                      colors={["#5f27cd", "#48dbfb"]}
                    >
                      <Text style={styles.serviceTitle}>
                        {item}
                      </Text>
                    </LinearGradient>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
}

const serviceSize = (width - 40) / 3

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    ...shadow,
    marginBottom: 10,
  },
  title: {
    color: "#4C7EEC",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  headerDescription: {
    color: "#8395a7",
  },
  servicesContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    ...shadow,
  },
  services: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  serviceContainer: {
    width: serviceSize,
    height: serviceSize,
    padding: 10,
  },
  service: {
    flex: 1,
    borderRadius: 10,
    ...shadow,
  },
  serviceBackground: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceTitle: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: (width - 40) / 3 / 8,
    textTransform: "uppercase",
    textAlign: "center",
  },
})

export default Screen(Services)
