import React from "react"
import { View, Text, ScrollView } from "react-native"
import { useDatabase } from "../../contexts/db"
import styles from "./style"

import Wrapper from "../../components/Wrapper"
import Banner from "../../components/Banner"
import Navbar from "../../components/Navbar"
import InfoBox from "../../components/Infobox"
import Card from "../../components/Card"
import Logo from "../../components/Logo"
import Container from "../../components/Container"

const About = () => {
  const { data } = useDatabase()

  return (
    <Wrapper>
      <Navbar title="About Dental Care" withBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner>
          <Logo />
        </Banner>
        <Container horizontal>
          <Card space={10} style={[styles.stats]}>
            {data.about.me.map((info, index) => (
              <View key={index} style={styles.stat}>
                <Text style={styles.statTitle}>
                  {info.title}
                </Text>
                <Text style={styles.statDescription}>
                  {info.description}
                </Text>
              </View>
            ))}
          </Card>
          {data.about.replies.map((reply, index) => (
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

export default About
