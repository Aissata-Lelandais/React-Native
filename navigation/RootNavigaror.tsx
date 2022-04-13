import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Station from "../Station/Station";
import Home from "../Home/Home";

type RootParams = {
  home: undefined;
  station: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="station"
          component={Station}
          options={{
            animation: "slide_from_right",
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="home" component={Home} />

        {/* <Stack.Screen name="rechercher" component={rechercher} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};
