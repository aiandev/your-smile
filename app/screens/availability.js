import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native"

//* Config
import config from "../config/config.json"

//* Components
import BannerImage from "../components/banner-image"
import Button from "../components/button"
import Navbar from "../components/navbar"
import Screen from "../components/screen"
import Logo from "../components/logo"

const AvailabilityItem = ({ day, workingHours }) => {
  return (
    <View style={styles.availabilityItem}>
      <View style={styles.availabilityItemTitleContainer}>
        <Text style={styles.availabilityItemTitle}>
          {day}
        </Text>
      </View>
      <View
        style={styles.availabilityItemWorkingHoursContainer}
      >
        <Text style={styles.availabilityItemWorkingHours}>
          {workingHours}
        </Text>
      </View>
    </View>
  )
}

const Availability = () => {
  return (
    <>
      <Navbar
        title="Availability"
        color="#8395a7"
        withBackButton
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerImage src={config.default_background}>
          <Logo style={{ position: "absolute", top: 55 }} />
        </BannerImage>
        <View style={styles.content}>
          <Text style={styles.availabilityTitle}>
            We are available on
          </Text>
          <View style={styles.availability}>
            <AvailabilityItem
              day="MON"
              workingHours="10:00 - 10:25"
            />
            <AvailabilityItem
              day="TUE"
              workingHours="10:00 - 10:25"
            />
            <AvailabilityItem
              day="WED"
              workingHours="10:00 - 10:25"
            />
            <AvailabilityItem
              day="THU"
              workingHours="10:00 - 10:25"
            />
            <AvailabilityItem
              day="FRI"
              workingHours="10:00 - 10:25"
            />
            <AvailabilityItem
              day="SAT"
              workingHours="10:00 - 10:25"
            />
            <AvailabilityItem
              day="SUN"
              workingHours="10:00 - 10:25"
            />
          </View>
          <Text style={styles.availabilityDescription}>
            <Text
              style={styles.availabilityDescriptionTitle}
            >
              Lunch Time:{" "}
            </Text>
            01:00PM - 02:00PM Everyday
          </Text>
          <Button title="Book An Appointment" />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  availability: { width: "100%", marginBottom: 10 },
  availabilityDescription: {
    color: "#8395a7",
    fontWeight: "bold",
    fontSize: 12,
  },
  availabilityDescriptionTitle: {
    color: "#4C7EEC",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  availabilityTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#4C7EEC",
    fontSize: 15,
    padding: 10,
    width: "100%",
    textAlign: "left",
  },
  availabilityItem: {
    height: 25,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  availabilityItemTitle: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#8395a7",
    textTransform: "uppercase",
  },
  availabilityItemTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  availabilityItemWorkingHours: {
    fontSize: 13,
    color: "#c8d6e5",
    fontWeight: "bold",
  },
  availabilityItemWorkingHoursContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  content: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Screen(Availability)
