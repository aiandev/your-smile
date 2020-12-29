import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native"

//* Components
import Button from "../components/button"
import InputOutline from "../components/input-outline"
import Navbar from "../components/navbar"
import KeyboardDismisser from "../components/keyboardDismisser"
import Screen from "../components/screen"
import Logo from "../components/logo"
import LoaderView from "../components/loaderview"

const EditProfile = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", height: 80 }}>
        <InputOutline
          placeHolder="First Name"
          background="#C6D3DF"
          color="#C6D3DF"
          borderWidth={1}
          marginRight={5}
        />
        <InputOutline
          placeHolder="Last Name"
          background="#C6D3DF"
          color="#C6D3DF"
          borderWidth={1}
          marginLeft={5}
        />
      </View>
      <InputOutline
        placeHolder="Email"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      <InputOutline
        placeHolder="Phone Number"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      <InputOutline
        placeHolder="Country"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      {false ? <LoaderView /> : <Button title="Submit" />}
    </View>
  )
}

const ChangePassword = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <InputOutline
        placeHolder="Your Email"
        background="#C6D3DF"
        color="#C6D3DF"
        borderWidth={1}
      />
      {false ? (
        <LoaderView />
      ) : (
        <Button title="Change Password" />
      )}
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
        clickable
        withBackButton
        iconName="logout"
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

export default Screen(Account)
