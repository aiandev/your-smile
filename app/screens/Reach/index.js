import React from "react"
import { View, Text, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useDatabase } from "../../contexts/db"
import MapView, { Marker } from "react-native-maps"
import { WHITE } from "../../config/constants"
import styles from "./style"

import Wrapper from "../../components/Wrapper"
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import Button from "../../components/Button"
import Container from "../../components/Container"

const Reach = () => {
  const { data } = useDatabase()
  const { navigate } = useNavigation()
  const { delta, latitude, longitude } = data.reach

  return (
    <Wrapper>
      <Navbar title="Reach Us" withBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container horizontal>
          <View style={styles.mapWrapper}>
            <MapView
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: delta,
                longitudeDelta: delta,
              }}
              style={styles.map}
            >
              <Marker
                coordinate={{
                  latitude,
                  longitude,
                }}
              />
            </MapView>
          </View>
          <Card space={10}>
            <Text style={styles.title}>Here we are</Text>
            <Text style={styles.address}>{data.contact.address}</Text>
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

export default Reach
