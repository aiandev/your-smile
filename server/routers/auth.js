const express = require("express")
const database = require("firebase").database()
const auth = require("firebase").auth()
const router = express.Router()

//* Managers
const userManager = require("../managers/userManager")

//* Models
const User = require("../models/User")

router.post("/signup", async (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    phoneNumber: req.body.phoneNumber,
  }
  try {
    //? Sign up with email and password and return the required data...
    const createdUser = await auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    )
    if (createdUser == null) return next(4001)
    //? Get the user id and create user model...
    const id = createdUser.user.uid
    const userModel = new User(id, user)
    try {
      //? Initialize user data in the database...
      database.ref(`/users/${id}`).set(userModel)
      res.status(200).json(userModel)
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    return next(4001)
  }
})

router.post("/login", userManager.basicAuth, async (req, res, next) => {
  res.status(200).json(req.user)
})

module.exports = router
