import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../Search/Search";
import Station from "../Station/Station";

type RootParams = {
  home: undefined;
  recherche: undefined;
  station: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="recherche" component={Recherche} />
        <Stack.Screen name="station" component={Station} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
