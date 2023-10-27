import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Chats from "../screens/Chats";
import Login from "../screens/Login";
import useAuth from "../hooks/useAuth";

export type ParamsListStackScreen = {
  Home: undefined;
  Chats: undefined;
  Login: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ParamsListStackScreen>();

export type NavigationStackScreenProps<T extends keyof ParamsListStackScreen> =
  NativeStackScreenProps<ParamsListStackScreen, T>;

const Navigator = () => {
  const user = useAuth();
  const isLogging = false;
  return (
    <Stack.Navigator>
      {user ? (
      // {isLogging ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Chats" component={Chats} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
