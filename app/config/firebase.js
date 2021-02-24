import firebase from "firebase"

const config = {
  apiKey: "AIzaSyD2OxrksltBb3TuuGg6cW8IsTbfxgGqfrQ",
  authDomain: "dentist-app-fa6f2.firebaseapp.com",
  projectId: "dentist-app-fa6f2",
  storageBucket: "dentist-app-fa6f2.appspot.com",
  messagingSenderId: "56715042226",
  appId: "1:56715042226:web:8fac37b8bcc3417f2fd8ab",
  measurementId: "G-2DX75FBXQG",
}

const app = firebase.initializeApp(config)

export const db = app.firestore()
export const auth = app.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
