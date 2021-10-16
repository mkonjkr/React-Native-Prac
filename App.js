import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click"
        onPress={() =>
          Alert.alert("Title", "Did you click?", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
