import React from "react"
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native"
import { useDatabase } from "../../contexts/db"
import styles from "./style"

import Wrapper from "../../components/Wrapper"
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import Container from "../../components/Container"

const uri =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYi3nxAn6ugH-dwoBW-ej-44fiumgf9AuLIg&usqp=CAU"

const Picture = ({
  index,
  title,
  description,
  ...props
}) => {
  const even = index % 2 === 0

  return (
    <Card
      space={10}
      style={[
        styles.pictureWrapper,
        {
          flexDirection: `row${even ? "" : "-reverse"}`,
        },
      ]}
    >
      <ImageBackground
        style={styles.picture}
        borderRadius={5}
        {...props}
      />
      <View
        style={[
          styles.info,
          {
            marginLeft: even ? 10 : 0,
            marginRight: even ? 0 : 10,
          },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {description}
          </Text>
        </ScrollView>
      </View>
    </Card>
  )
}

const Gallery = () => {
  const { data } = useDatabase()

  return (
    <Wrapper>
      <Navbar title="Gallery" withBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container horizontal vertical>
          {data.gallery.map((picture, index) => (
            <Picture
              key={index}
              index={index}
              source={{ uri: picture.url }}
              title={picture.title}
              description={picture.description}
            />
          ))}
        </Container>
      </ScrollView>
    </Wrapper>
  )
}

export default Gallery
