import React from "react"
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { WHITE } from "../config/constants"

const Logo = ({ size = 80, color, ...rest }) => (
  <Icon
    name="tooth"
    size={size}
    color={color || WHITE}
    {...rest}
  />
)

export default Logo
