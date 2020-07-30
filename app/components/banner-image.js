import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";

//* Config
import colors from "../config/colors";

const BannerImage = ({ src = "", text = "" }) => {
  return (
    <ImageBackground
      blurRadius={5}
      source={{ uri: src || null }}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginVertical: 5,
  },
  text: {
    width: "100%",
    fontSize: 30,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    textShadowColor: "rgba(0,0, 0, 0.5)",
    textShadowRadius: 40,
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

export default BannerImage;
