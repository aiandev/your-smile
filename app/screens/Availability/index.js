import React from "react"
import { View, Text, ScrollView } from "react-native"
import { useDatabase } from "../../contexts/db"
import { useNavigation } from "@react-navigation/native"
import { WHITE } from "../../config/constants"
import styles from "./style"

import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import Button from "../../components/Button"
import Container from "../../components/Container"
import Card from "../../components/Card"
import Logo from "../../components/Logo"
import Wrapper from "../../components/Wrapper"

const DailyAvailability = ({ day, time }) => {
  return (
    <View style={styles.availability}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  )
}

const Availability = () => {
  const { data } = useDatabase()
  const { navigate } = useNavigation()

  return (
    <Wrapper>
      <Navbar title="Availability" withBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner>
          <Logo />
        </Banner>
        <Container horizontal>
          <Card space={10}>
            <Text style={styles.title}>
              We are available on
            </Text>
            <View style={styles.availabilities}>
              {data.availability.working_hours.map(
                (info, index) => (
                  <DailyAvailability
                    key={index}
                    day={info.day}
                    time={info.time}
                  />
                )
              )}
            </View>
            <Text style={styles.lunch}>
              <Text style={styles.lunchTitle}>
                Lunch Time:{" "}
              </Text>
              {data.availability.lunch_time_title}
            </Text>
            <Button
              text="Contact us"
              onPress={() => navigate("contact")}
              color={WHITE}
            />
          </Card>
        </Container>
      </ScrollView>
    </Wrapper>
  )
}

export default Availability
