import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'

//* Config
import config from '../config/config.json'

//* Components
import BannerImage from '../components/banner-image'
import Navbar from '../components/navbar'
import Screen from '../components/screen'
import Logo from '../components/logo'

const { width } = Dimensions.get('window')

const AboutUs = () => {
  const myConfig = config.screens['about-us']
  console.log(myConfig)
  return (
    <>
      <Navbar title='About Dental Care' color='#8395a7' withBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BannerImage src={config.default_background}>
          <Logo style={{ position: 'absolute', top: 55 }} />
        </BannerImage>
        <View style={styles.content}>
          <Text style={styles.question}>Who are we?</Text>
          <Text style={styles.description}>{myConfig['who-are-we-description']}</Text>
          <View style={styles.about}>
            {myConfig.about.map((item, index) => (
              <View key={index} style={styles.aboutItem}>
                <Text style={styles.aboutItemTitle}>{item.title}</Text>
                <Text style={styles.aboutItemDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.question}>Why we are unique?</Text>
          <Text style={styles.description}>{myConfig['why-we-are-unique-description1']}</Text>
          <Text style={styles.description}>{myConfig['why-we-are-unique-description2']}</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  about: {
    marginVertical: 10,
    width: '100%',
    height: (width - 10) / 3 / 2,
    flexDirection: 'row',
  },
  aboutItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutItemTitle: {
    fontWeight: 'bold',
    color: '#4C7EEC',
    fontSize: (width - 10) / 3 / 4,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  aboutItemDescription: {
    fontSize: (width - 10) / 3 / 10,
    color: '#8395a7',
    textAlign: 'center',
  },
  content: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
  },
  description: {
    color: '#8395a7',
    marginVertical: 5,
  },
  question: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#4C7EEC',
    fontWeight: 'bold',
  },
})

export default Screen(AboutUs)
