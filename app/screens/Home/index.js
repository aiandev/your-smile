import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useDatabase } from "../../contexts/db"
import { NAVY } from "../../config/constants"
import styles from "./style"

import Wrapper from "../../components/Wrapper"
import Navbar from "../../components/Navbar"
import Logo from "../../components/Logo"
import Banner from "../../components/Banner"

const Category = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.category}
    >
      <Icon
        style={styles.categoryIcon}
        name={icon}
        color={NAVY}
        size={30}
      />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const Home = () => {
  const { navigate } = useNavigation()
  const { data } = useDatabase()

  return (
    <Wrapper>
      <Navbar title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner>
          <Logo style={styles.logo} />
          <Text
            style={styles.title}
          >{`Dr. ${data.full_name}`}</Text>
          <Text style={styles.description}>
            {data.clinic_name}
          </Text>
        </Banner>
        <View style={styles.categories}>
          <View style={styles.row}>
            <Category
              onPress={() => navigate("about")}
              title="About us"
              icon="user"
            />
            <Category
              onPress={() => navigate("services")}
              title="Services"
              icon="tooth"
            />
            <Category
              onPress={() => navigate("gallery")}
              title="Gallery"
              icon="image"
            />
          </View>
          <View style={styles.row}>
            <Category
              onPress={() => navigate("availability")}
              title="Availability"
              icon="clock"
            />
            <Category
              onPress={() => navigate("reach")}
              title="Reach us"
              icon="map"
            />
            <Category
              onPress={() => navigate("contact")}
              title="Contact us"
              icon="mobile-alt"
            />
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default Home
