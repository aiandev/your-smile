const firebase = require('firebase')

//* Config
import firebaseConfig from '../config/firebase'
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

//* Models
import User from '../models/User'
import errorManager from './errorManager'

//* Utils
const auth = firebase.auth()
const database = firebase.database()

const authenticate = async (email, password) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    const id = response.user.uid

    //? Get user data from database...
    const snap = await database.ref(`/users/${id}`).once('value')
    return snap.val()
  } catch (error) {
    //? Error validation...
    const code = error.code
    switch (code) {
      case 'auth/user-not-found':
        return errorManager.createError(4004)
      case 'auth/wrong-password':
        return errorManager.createError(4003)
      default:
        return errorManager.createError(4004)
    }
  }
}

const createUser = async userData => {
  try {
    const response = await auth.createUserWithEmailAndPassword(userData.email, userData.password)
    const id = response.user.uid
    const userModel = new User(id, userData)
    database.ref(`/users/${id}`).set(userModel)
    return userModel
  } catch (error) {
    //? Error validation...
    return errorManager.createError(4001)
  }
}

export const login = async (email, password) => {
  if (!email || !password) return
  const response = await authenticate(email, password)

  //? Check if the response is an error...
  if (response.statusCode)
    return {
      success: false,
      message: response.message,
    }
  return {
    success: true,
    user: response,
  }
}

export const signup = async user => {
  if (!user) return
  const response = await createUser(user)

  //? Check if the response is an error...
  if (response.statusCode)
    return {
      success: false,
      message: response.message,
    }
  return {
    success: true,
    user: response,
  }
}

export const updatePassword = async email => {
  if (!email) return
  await auth.sendPasswordResetEmail(email)
}

export const updateUserData = async (id, userData) => {
  if (!id || !userData) return
  try {
    const userRef = database.ref('/users/' + id)
    await userRef.update({ ...userData })

    const user = await (await userRef.once('value')).val()
    return { success: true, user }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
