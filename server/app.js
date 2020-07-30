const express = require("express")
const http = require("http")
const cors = require("cors")

const app = express()
const server = http.Server(app)

require("dotenv").config()
require("./config/firebase")()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/auth", require("./routers/auth"))

//? Must be last...
app.use(require("./utils/errorHandler"))

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log("Listening on PORT: " + PORT))
