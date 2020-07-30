const errorManager = require("../managers/errorManager")

module.exports = (code, req, res, next) => {
  if (!code) return console.error("Error code is undefined...")
  const error = errorManager.errorToResponse(parseInt(code))
  return res.status(error.statusCode).json({ ...error })
}
