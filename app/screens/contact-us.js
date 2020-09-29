import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//* Config
import config from '../config/config.json'

//* Contexts
import { UserDataContext } from '../contexts/user-data-context'

//* Components
import Screen from '../components/screen'
import Button from '../components/button'
import InputOutline from '../components/input-outline'
import Navbar from '../components/navbar'
import KeyboardDismisser from '../components/keyboardDismisser'
import Logo from '../components/logo'

//* Managers
import { sendMessage } from '../managers/userManager'

const Home = () => {
  const navigation = useNavigation()

  //* Contexts
  const { userData } = useContext(UserDataContext)

  //* States
  const [name, setName] = useState(`${userData.firstName} ${userData.lastName}` || '')
  const [email, setEmail] = useState(userData.email || '')
  const [message, setMessage] = useState('')

  const sendMessageHandler = async () => {
    await sendMessage(name, email, message)
    navigation.navigate('home')
  }

  return (
    <>
      <Navbar title='Contact Us' withBackButton color='#8395a7' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardDismisser>
          <>
            <View style={styles.logoContainer}>
              <Logo color='#4C7EEC' />
            </View>
            <View style={styles.content}>
              <View style={styles.contactInfoContainer}>
                <View style={styles.contactInfo}>
                  <View style={styles.contactInfoTitleContainer}>
                    <Text style={styles.contactInfoTitle}>Call Us</Text>
                  </View>
                  <View style={styles.contactInfoDescriptionContainer}>
                    <Text style={styles.contactInfoDescription}>{config.phone}</Text>
                  </View>
                </View>
                <View style={styles.contactInfo}>
                  <View style={styles.contactInfoTitleContainer}>
                    <Text style={styles.contactInfoTitle}>Mail Us</Text>
                  </View>
                  <View style={styles.contactInfoDescriptionContainer}>
                    <Text style={styles.contactInfoDescription}>{config.email}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.formContainer}>
                <View style={styles.form}>
                  <View style={styles.formTitleContainer}>
                    <Text style={styles.formTitle}>Send Your Message</Text>
                  </View>
                  <InputOutline placeHolder='Full Name' value={name} onChange={text => setName(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
                  <InputOutline placeHolder='Email' value={email} onChange={text => setEmail(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
                  <InputOutline placeHolder='Message' value={message} onChange={text => setMessage(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
                  <Button onPress={sendMessageHandler} title='Send Message' />
                </View>
              </View>
            </View>
          </>
        </KeyboardDismisser>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  contactInfo: {
    flex: 1,
    margin: 5,
    marginBottom: 2.5,
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  contactInfoContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    padding: 5,
  },
  contactInfoDescription: {
    color: '#8395a7',
  },
  contactInfoDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contactInfoTitle: {
    fontWeight: 'bold',
    color: '#4C7EEC',
  },
  contactInfoTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    padding: 10,
    paddingTop: 2.5,
    flex: 1,
  },
  form: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4C7EEC',
  },
  formTitleContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  logoContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Screen(Home)
