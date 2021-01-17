import React from "react"
import { View, Text, ScrollView } from "react-native"
import styles from "./style"

import Wrapper from "../../components/Wrapper"
import Navbar from "../../components/Navbar"
import Container from "../../components/Container"
import Card from "../../components/Card"
import InfoBox from "../../components/Infobox"
import { useDatabase } from "../../contexts/db"

const Services = () => {
  const { data } = useDatabase()

  return (
    <Wrapper>
      <Navbar title="Services" withBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container horizontal vertical>
          <Card space={10}>
            <Text style={styles.title}>Our services</Text>
            <View style={styles.servicesWrapper}>
              <View style={styles.services}>
                {data.services.list.map(
                  (service, index) => (
                    <View
                      key={index}
                      style={styles.service}
                    >
                      <Text style={styles.serviceTitle}>
                        {service}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </Card>
          {data.services.replies.map((reply, index) => (
            <InfoBox
              key={index}
              question={reply.question}
              info={reply.answer}
              space={10}
            />
          ))}
        </Container>
      </ScrollView>
    </Wrapper>
  )
}

export default Services
