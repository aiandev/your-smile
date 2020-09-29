const errors = require('../config/errors.json')

class ErrorManager {
  constructor() {
    this.errors = errors
    this.defaultError = {
      statusCode: 500,
      code: 5000,
      message: 'Unhandled exception.',
    }
  }
  createError = code => (typeof code === 'number' && this.errors[code] ? this.getError(code) : this.defaultError)

  getError = code => ({
    statusCode: code.toString().substr(0, 3),
    code,
    message: this.errors[code],
  })
}

const errorManager = new ErrorManager()
module.exports = errorManager
