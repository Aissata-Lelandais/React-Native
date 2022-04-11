import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RootNavigator } from "./navigation/RootNavigaror";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </View>
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
