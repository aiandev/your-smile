import React from "react"
import { View } from "react-native"

function Container({
  children,
  horizontal = false,
  vertical = false,
  ...props
}) {
  return (
    <View
      style={{
        marginHorizontal: horizontal ? 10 : 0,
        marginVertical: vertical ? 10 : 0,
      }}
      {...props}
    >
      {children}
    </View>
  )
}

export default Container
