import api from "../config/api"
import { encode } from "base-64"

export const login = async (email, password) => {
  const credentials = encode(`${email}:${password}`)
  const authorizationValue = `Basic ${credentials}`
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationValue,
    },
  }
  const response = await fetch(`${api.url}/auth/login`, options)
  const data = await response.json()
  if (data.statusCode) return { success: false, ...data }
  return {
    success: true,
    user: {
      ...data,
    },
  }
}

export const signup = async (user = {}) => {
  if (!user) return
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }
  const response = await fetch(`${api.url}/auth/signup`, options)
  const data = await response.json()
  if (data.statusCode) return { success: false, ...data }
  return {
    success: true,
    user: {
      ...data,
    },
  }
}
