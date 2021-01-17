import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native"
import { useAuth } from "../../contexts/auth"

import Button from "../../components/Button"
import Input from "../../components/Input"
import Navbar from "../../components/Navbar"
import KeyboardDismisser from "../../components/KeyboardDismisser"
import Logo from "../../components/Logo"

const EditProfile = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", height: 80 }}>
        <Input
          placeHolder="First Name"
          background="#C6D3DF"
          color="#C6D3DF"
          borderWidth={1}
          marginRight={5}
        />
        <Input
          placeHolder="Last Name"
          background="#C6D3DF"
          color="#C6D3DF"
          borderWidth={1}
          marginLeft={5}
        />
      </View>
      <Input
        placeHolder="Email"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      <Input
        placeHolder="Phone Number"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      <Input
        placeHolder="Country"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      <Button text="Submit" />
    </View>
  )
}

const ChangePassword = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Input
        placeHolder="Your Email"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      <Button text="Change Password" />
      <View
        style={{
          width: "100%",
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontWeight: "bold", color: "#8395a7" }}
        >
          Please check your mail after sending your email.
        </Text>
      </View>
    </View>
  )
}

const Account = () => {
  const { logout } = useAuth()

  // const renderScreenSelect = () => (
  //   <View style={styles.selectBar}>
  //     {screens.map((screen, index) => (
  //       <TouchableOpacity
  //         onPress={() => screenSelectHandler(screen.name)}
  //         key={index}
  //         style={styles.selectItem}
  //       >
  //         <Text
  //           style={[
  //             styles.selectItemTitle,
  //             {
  //               color: screen.isSelected
  //                 ? "#4C7EEC"
  //                 : "#8395a7",
  //             },
  //           ]}
  //         >
  //           {screen.name}
  //         </Text>
  //         {screen.isSelected && (
  //           <View style={styles.selectedItemDecoration} />
  //         )}
  //       </TouchableOpacity>
  //     ))}
  //   </View>
  // )

  return (
    <>
      <Navbar
        color="#8395a7"
        title="Account"
        withBackButton
        icon="logout"
        onIconPress={logout}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardDismisser>
          <View style={styles.header}>
            <Logo color="#4C7EEC" />
          </View>
        </KeyboardDismisser>
        <View style={styles.content}></View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "red",
  },
  header: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#c8d6e5",
    borderBottomWidth: 1,
  },
  selectBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    marginBottom: 20,
    borderBottomColor: "#c8d6e5",
    borderBottomWidth: 1,
  },
  selectItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectItemTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  selectedItemDecoration: {
    position: "absolute",
    bottom: 10,
    height: 5,
    width: 70,
    borderRadius: 2.5,
    backgroundColor: "#4C7EEC",
  },
})

export default Account
