import { StatusBar } from "react-native";
import React from "react";
import { RootNavigator } from "./navigation/RootNavigaror";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}
