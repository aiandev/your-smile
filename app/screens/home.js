import React from "react"
import { AsyncStorage } from "react-native"
import { useNavigation } from "@react-navigation/native"

//* Config
import storage from "../config/api"

//* Components
import Screen from "../components/screen"
import BannerImage from "../components/banner-image"
import Button from "../components/button"

const Home = () => {
  const navigation = useNavigation()
  return (
    <>
      <BannerImage
        text="Home"
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&w=1000&q=80"
      />
      <Button
        title="Log out"
        onPress={async () => {
          await AsyncStorage.removeItem(storage.authKey)
          navigation.navigate("authentication")
        }}
      />
    </>
  )
}

export default Screen(Home)
