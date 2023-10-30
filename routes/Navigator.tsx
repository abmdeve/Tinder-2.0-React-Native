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
import ModalScreen from "../screens/ModalScreen";
import useAuth from "../hooks/useAuth";

export type ParamsListStackScreen = {
  Home: undefined;
  Chats: undefined;
  Login: undefined;
  ModalScreen: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ParamsListStackScreen>();

export type NavigationStackScreenProps<T extends keyof ParamsListStackScreen> =
  NativeStackScreenProps<ParamsListStackScreen, T>;

const Navigator = () => {
  const user = useAuth();
  const isLogging = false;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        // {isLogging ? (
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
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
