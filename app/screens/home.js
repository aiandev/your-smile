import React from "react"
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

//* Config
import config from "../config/config.json"

//* Components
import Screen from "../components/screen"
import Button from "../components/button"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import BannerImage from "../components/banner-image"

const { width } = Dimensions.get("window")

const Category = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.category}
    >
      <Icon
        style={{ padding: 10 }}
        name={icon}
        color="#4C7EEC"
        size={(width / 2 - 10) / 4}
      />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const Home = () => {
  const navigation = useNavigation()

  return (
    <>
      <Navbar
        title="Home"
        color="#8395a7"
        clickable
        iconName="account-circle"
        onPress={() => navigation.navigate("account")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerImage src={config.default_background}>
          <Logo
            style={{ position: "absolute", right: 20 }}
          />
          <View style={styles.backgroundTitleContainer}>
            <Text
              style={styles.backgroundTitle}
            >{`Dr. ${config.doctor_name}`}</Text>
            <Text style={styles.backgroundDescription}>
              Dental Care Clinic
            </Text>
          </View>
        </BannerImage>
        <View style={styles.categories}>
          <View style={styles.categoryRow}>
            <Category
              onPress={() => navigation.navigate("about")}
              title="About us"
              icon="user"
            />
            <Category
              onPress={() =>
                navigation.navigate("services")
              }
              title="Services"
              icon="tooth"
            />
            <Category
              title="Appointment"
              icon="calendar-check"
            />
          </View>
          <View style={styles.categoryRow}>
            <Category title="Doc Blog" icon="file-alt" />
            <Category
              onPress={() =>
                navigation.navigate("testimonials")
              }
              title="Testimonials"
              icon="comment-alt"
            />
            <Category
              onPress={() => navigation.navigate("gallery")}
              title="Gallery"
              icon="image"
            />
          </View>
          <View style={styles.categoryRow}>
            <Category
              onPress={() =>
                navigation.navigate("availability")
              }
              title="Availability"
              icon="clock"
            />
            <Category
              onPress={() => navigation.navigate("reach")}
              title="Reach us"
              icon="map"
            />
            <Category
              onPress={() => navigation.navigate("contact")}
              title="Contact us"
              icon="mobile-alt"
            />
          </View>
        </View>
        <Button title="Book an appointment" />
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  backgroundDescription: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
  },
  backgroundTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  backgroundTitleContainer: {
    width: width - 100,
    justifyContent: "center",
    paddingLeft: 10,
    position: "absolute",
    left: 0,
  },
  categories: {
    width: width,
    height: width,
    padding: 5,
  },
  categoryRow: {
    flex: 1,
    flexDirection: "row",
  },
  category: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: (width / 3 - 10) / 9,
    color: "#8395a7",
  },
})

export default Screen(Home)
