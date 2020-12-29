import firebase from "firebase"

const config = {
  apiKey: "AIzaSyCF8LxvIXCAcY_b74jk8ltfZ3Wx5ABBHo4",
  authDomain: "dental-care-725ac.firebaseapp.com",
  projectId: "dental-care-725ac",
  storageBucket: "dental-care-725ac.appspot.com",
  messagingSenderId: "641594101942",
  appId: "1:641594101942:web:fa90ec5756a99cf822d617",
}

const app = firebase.initializeApp(config)

export const db = app.firestore()
export const auth = app.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
