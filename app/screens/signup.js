import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Svg, { Circle } from 'react-native-svg'

//* Config
import storage from '../config/storage'

//* Contexts
import { UserDataContext } from '../contexts/user-data-context'
import { AuthenticationContext } from '../contexts/authentication-context'

//* Components
import Screen from '../components/screen'
import Button from '../components/button'
import LoaderView from '../components/loaderview'
import Input from '../components/input'
import Errors from '../components/errors'
import KeyboardDismisser from '../components/keyboardDismisser'
import Logo from '../components/logo'

//* Functions
import { checkForErrors, isMin, areEmpty, isEmail } from '../functions/validation'

//* Managers
import { signup } from '../managers/authenticationManager'

const { width, height } = Dimensions.get('window')

const Welcome = () => {
  const navigation = useNavigation()

  //* Contexts
  const { setUserData } = useContext(UserDataContext)
  const { setIsAuthenticated } = useContext(AuthenticationContext)

  //* States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [country, setCountry] = useState('')
  const [errorList, setErrorList] = useState([])
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signUpHandler = async () => {
    const errors = checkForErrors([
      areEmpty('Inputs should not be empty.', [firstName, lastName, email, password, phoneNumber, country]),
      isEmail(email),
      isMin(password, 'Password should be atleast 8 characters long.', 8),
    ])
    if (errors.length > 0) return setErrorList(errors)

    const user = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      country,
    }
    setIsAuthenticating(true)
    const response = await signup(user)
    if (!response.success) {
      const errors = checkForErrors([response])
      setIsAuthenticating(false)
      return setErrorList(errors)
    }
    //? Save user in local storage...
    const storageData = JSON.stringify({ email, password })
    await AsyncStorage.setItem(storage.authKey, storageData)

    console.log(response.user)
    setUserData(response.user)
    setIsAuthenticated(true)
    setIsAuthenticating(false)
    navigation.navigate('services')

    //? Clear inputs...
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setPhoneNumber('')
    setCountry('')
    setErrorList([])
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Svg width={width} height={(height - 320) / 2} style={{ position: 'absolute', top: 0 }}>
        <Circle cx={width / 2} cy={-500} r={(height - 320) / 2 + 490} fill='#4C7EEC' />
      </Svg>
      <KeyboardDismisser>
        <View style={styles.content}>
          <View style={styles.header}>
            <Logo />
          </View>
          <View style={styles.nameContainer}>
            <Input placeHolder='First Name' value={firstName} onChange={text => setFirstName(text)} background='#C6D3DF' color='#fff' marginRight={5} />
            <Input placeHolder='Last Name' value={lastName} onChange={text => setLastName(text)} background='#C6D3DF' color='#fff' marginLeft={5} />
          </View>
          <Input placeHolder='Email' value={email} onChange={text => setEmail(text)} background='#C6D3DF' color='#fff' />
          <Input placeHolder='Password' value={password} onChange={text => setPassword(text)} background='#C6D3DF' color='#fff' withTypeSwitch isSecure={true} />
          <Input placeHolder='Phone Number' value={phoneNumber} onChange={text => setPhoneNumber(text)} background='#C6D3DF' color='#fff' />
          <Input placeHolder='Country' value={country} onChange={text => setCountry(text)} background='#C6D3DF' color='#fff' />
          {errorList.length !== 0 && <Errors errorList={errorList} />}
          {isAuthenticating ? <LoaderView /> : <Button title='Sign Up' onPress={signUpHandler} />}
          <View style={styles.logInContainer}>
            <View style={styles.logInTitleContainer}>
              <Text style={styles.logInTitle}>Have An account?</Text>
            </View>
            <View style={styles.logInButtonContainer}>
              <Button title='Log In' onPress={() => navigation.navigate('login')} />
            </View>
          </View>
        </View>
      </KeyboardDismisser>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: (height - 320) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    height: 80,
  },
  logInContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  logInButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logInTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInTitle: {
    color: '#4C7EEC',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default Screen(Welcome, '#4C7EEC', 'light-content')
