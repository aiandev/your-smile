const basicAuth = require("basic-auth")
const database = require("firebase").database()
const auth = require("firebase").auth()

exports.basicAuth = async (req, res, next) => {
  //? Decode authentication Header...
  const credentials = basicAuth(req)
  if (!credentials) return next(4002)

  try {
    //? Authenticate and get user id...
    const authenticatedUser = await auth.signInWithEmailAndPassword(
      credentials.name,
      credentials.pass
    )
    const id = authenticatedUser.user.uid
    try {
      //? Get user data from the database if no errors are found...
      database.ref(`/users/${id}`).once("value", snap => {
        req.user = snap.val()
        return next()
      })
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    const code = error.code
    if (code === "auth/user-not-found") return next(4004)
    else if (code === "auth/wrong-password") return next(4003)
  }
}
