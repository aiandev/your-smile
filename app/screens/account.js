import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, AsyncStorage, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

//* Config
import storage from '../config/storage'

//* Contexts
import { AuthenticationContext } from '../contexts/authentication-context'
import { UserDataContext } from '../contexts/user-data-context'

//* Components
import Button from '../components/button'
import InputOutline from '../components/input-outline'
import Navbar from '../components/navbar'
import KeyboardDismisser from '../components/keyboardDismisser'
import Screen from '../components/screen'
import Logo from '../components/logo'
import LoaderView from '../components/loaderview'
import Errors from '../components/errors'

//* Functions
import { checkForErrors, isEmail, areEmpty } from '../functions/validation'

//*  Managers
import { updatePassword, updateUserData } from '../managers/authenticationManager'

const EditProfile = () => {
  const navigation = useNavigation()
  //* Contexts
  const { userData, setUserData } = useContext(UserDataContext)

  //* States
  const [firstName, setFirstName] = useState(userData.firstName || '')
  const [lastName, setLastName] = useState(userData.lastName || '')
  const [email, setEmail] = useState(userData.email || '')
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || '')
  const [country, setCountry] = useState(userData.country || '')
  const [errorList, setErrorList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const editProfileHandler = async () => {
    const errors = checkForErrors([isEmail(email), areEmpty('Inputs should not be empty.', [firstName, lastName, email, phoneNumber, country])])
    if (errors.length > 0) return setErrorList(errors)
    setIsLoading(true)

    const response = await updateUserData(userData.id, {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
    })

    if (!response.success) {
      setIsLoading(false)
      return setErrorList(['There was an error updating your user data, please try again.'])
    }

    setUserData(response.user)
    navigation.navigate('home')
    setIsLoading(false)
    setErrorList([])
  }

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', height: 80 }}>
        <InputOutline placeHolder='First Name' value={firstName} onChange={text => setFirstName(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} marginRight={5} />
        <InputOutline placeHolder='Last Name' value={lastName} onChange={text => setLastName(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} marginLeft={5} />
      </View>
      <InputOutline placeHolder='Email' value={email} onChange={text => setEmail(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
      <InputOutline placeHolder='Phone Number' value={phoneNumber} onChange={text => setPhoneNumber(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
      <InputOutline placeHolder='Country' value={country} onChange={text => setCountry(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
      {errorList.length !== 0 && <Errors errorList={errorList} />}
      {isLoading ? <LoaderView /> : <Button onPress={editProfileHandler} title='Submit' />}
    </View>
  )
}

const ChangePassword = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [errorList, setErrorList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const changePasswordHandler = async () => {
    const errors = checkForErrors([isEmail(email)])
    if (errors.length > 0) return setErrorList(errors)

    setIsLoading(true)
    await updatePassword(email)
    navigation.navigate('home')
    setIsLoading(false)
    setErrorList([])
  }

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <InputOutline placeHolder='Your Email' value={email} onChange={text => setEmail(text)} background='#C6D3DF' color='#C6D3DF' borderWidth={1} />
      {errorList.length !== 0 && <Errors errorList={errorList} />}
      {isLoading ? <LoaderView /> : <Button onPress={changePasswordHandler} title='Change Password' />}
      <View style={{ width: '100%', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: '#8395a7' }}>Please check your mail after sending your email.</Text>
      </View>
    </View>
  )
}

const Account = () => {
  const navigation = useNavigation()

  //* Contexts
  const { setIsAuthenticated } = useContext(AuthenticationContext)
  const { setUserData } = useContext(UserDataContext)

  //* States
  const [screens, setScreens] = useState([
    {
      name: 'Edit Profile',
      screen: <EditProfile />,
      isSelected: true,
    },
    {
      name: 'Change Password',
      screen: <ChangePassword />,
      isSelected: false,
    },
  ])

  const getSelectedScreen = () => screens.find(({ isSelected }) => isSelected).screen

  const logoutHandler = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: async () => {
          await AsyncStorage.removeItem(storage.authKey)
          setUserData({})
          setIsAuthenticated(false)
          navigation.navigate('authentication')
        },
      },
    ])
  }

  const screenSelectHandler = name => {
    if (!name) return
    const newScreens = [...screens]
    const selectedScreen = newScreens.find(({ isSelected }) => isSelected)
    selectedScreen.isSelected = false

    const newSelectedScreen = newScreens.find(screen => screen.name === name)
    newSelectedScreen.isSelected = true
    setScreens(newScreens)
  }

  const renderScreenSelect = () => (
    <View style={styles.selectBar}>
      {screens.map((screen, index) => (
        <TouchableOpacity onPress={() => screenSelectHandler(screen.name)} key={index} style={styles.selectItem}>
          <Text style={[styles.selectItemTitle, { color: screen.isSelected ? '#4C7EEC' : '#8395a7' }]}>{screen.name}</Text>
          {screen.isSelected && <View style={styles.selectedItemDecoration} />}
        </TouchableOpacity>
      ))}
    </View>
  )

  return (
    <>
      <Navbar color='#8395a7' title='Account' clickable withBackButton iconName='logout' onPress={logoutHandler} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardDismisser>
          <View style={styles.header}>
            <Logo color='#4C7EEC' />
          </View>
        </KeyboardDismisser>
        {renderScreenSelect()}
        <View style={styles.content}>{getSelectedScreen()}</View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#c8d6e5',
    borderBottomWidth: 1,
  },
  selectBar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomColor: '#c8d6e5',
    borderBottomWidth: 1,
  },
  selectItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectItemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  selectedItemDecoration: {
    position: 'absolute',
    bottom: 10,
    height: 5,
    width: 70,
    borderRadius: 2.5,
    backgroundColor: '#4C7EEC',
  },
})

export default Screen(Account)
