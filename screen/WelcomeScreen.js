import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },

  logo: {
    width: 50,
    height: 50,
  },

  logoContainer: {
    position: "absolute",
    top: "40%",
    alignItems: "center",
  },
});
export default WelcomeScreen;
