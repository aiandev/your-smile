const defaultMessage = 'Not valid.'

export const checkForErrors = (errorValidators = []) => {
  const errors = []
  console.log(errorValidators)
  for (let i = 0; i < errorValidators.length; i++) if (!errorValidators[i].success) errors.push(errorValidators[i].message)
  return errors
}

const contains = (elements, element, startIndex, endIndex) => {
  for (let i = startIndex; i < endIndex; i++) {
    if (elements[i] === element) return true
  }
  return false
}

export const isMin = (suspect, message, min) => {
  if (suspect.length < min) return { success: false, message: message || defaultMessage }
  return { success: true }
}

export const isEmpty = (suspect, message) => {
  if (!suspect) return
  if (!suspect.length) return { success: false, message: message || defaultMessage }
  return { success: true }
}

export const areEmpty = (message, suspects = []) => {
  if (!suspects || suspects.length === 0) return
  for (let i = 0; i < suspects.length; i++) if (suspects[i].length === 0) return { success: false, message: message || defaultMessage }
  return { success: true }
}

export const isEmail = (suspect = '') => {
  const message = 'Please enter a valid email.'

  if (!suspect.includes('@')) return { success: false, message }

  const suspectElements = suspect.slice()
  const addressSignIndex = suspectElements.indexOf('@')

  if (!contains(suspectElements, '.', addressSignIndex, suspectElements.length))
    return {
      success: false,
      message,
    }
  return { success: true }
}

export const areEqual = (a = '', b = '', message) => {
  if (a !== b)
    return {
      success: false,
      message,
    }
  return {
    success: true,
  }
}
