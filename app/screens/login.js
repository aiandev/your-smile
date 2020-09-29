import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, AsyncStorage, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

//* Config
import storage from '../config/storage'

//* Contexts
import { UserDataContext } from '../contexts/user-data-context'
import { AuthenticationContext } from '../contexts/authentication-context'

//* Components
import Screen from '../components/screen'
import Button from '../components/button'
import LoaderView from '../components/loaderview'
import InputOutline from '../components/input-outline'
import Errors from '../components/errors'
import KeyboardDismisser from '../components/keyboardDismisser'
import Logo from '../components/logo'

//* Functions
import { checkForErrors, isEmail, isMin, areEmpty } from '../functions/validation'

//* Managers
import { login } from '../managers/authenticationManager'

const { height } = Dimensions.get('window')

const Login = () => {
  const navigation = useNavigation()

  //* Contexts
  const { setUserData } = useContext(UserDataContext)
  const { setIsAuthenticated } = useContext(AuthenticationContext)

  //* States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorList, setErrorList] = useState([])
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const loginHandler = async () => {
    //? Input validation...
    const errors = checkForErrors([areEmpty('Inputs should not be empty.', [email, password]), isMin(password, 'Password should be atleast 8 characters long.', 8), isEmail(email)])
    if (errors.length > 0) return setErrorList(errors)

    setIsAuthenticating(true)
    const response = await login(email, password)
    if (!response.success) {
      const errors = checkForErrors([response])
      setIsAuthenticating(false)
      return setErrorList(errors)
    }

    //? Save user in local storage...
    const storageData = JSON.stringify({ email, password })
    await AsyncStorage.setItem(storage.authKey, storageData)

    setErrorList([])
    setUserData(response.user)
    setIsAuthenticated(true)
    setIsAuthenticating(false)
    navigation.navigate('services')

    //? Clear inputs...
    setEmail('')
    setPassword('')
  }

  return (
    <LinearGradient style={styles.background} colors={['#48dbfb', '#5f27cd']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardDismisser>
          <>
            <View style={styles.header}>
              <Logo />
            </View>
            <InputOutline placeHolder='Email' background='#fff' color='#fff' value={email} onChange={text => setEmail(text)} />
            <InputOutline placeHolder='Password' background='#fff' color='#fff' value={password} onChange={text => setPassword(text)} isSecure withTypeSwitch />
            {errorList.length !== 0 && <Errors errorList={errorList} />}
            {isAuthenticating ? <LoaderView background='#fff' color='#4C7EEC' /> : <Button title='Log In' background='#fff' color='#4C7EEC' onPress={loginHandler} />}
            <View style={styles.signUpContainer}>
              <View style={styles.signUpTitleContainer}>
                <Text style={styles.signUpTitle}>New User?</Text>
              </View>
              <View style={styles.signUpButtonContainer}>
                <Button title='Sign Up' background='#fff' color='#4C7EEC' onPress={() => navigation.navigate('signup')} />
              </View>
            </View>
          </>
        </KeyboardDismisser>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: (height - 320) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  signUpButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpTitle: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default Screen(Login, '#48dbfb', 'light-content')
