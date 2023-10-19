import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

export type ParamsListStackScreen = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ParamsListStackScreen>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
