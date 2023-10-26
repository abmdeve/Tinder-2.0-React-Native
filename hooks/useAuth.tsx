import { View, Text, Button } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

export interface AuthProviderProps {
  children: any;
}
// WEB 731010029797-gstb7gn26b112r9ucf2528c520g2otgd.apps.googleusercontent.com
// IOS 731010029797-0r20dds5fg2ht7900toce0uktgcma2ju.apps.googleusercontent.com
// ANDROID 731010029797-im813j5hhig46c03aqm4urspci8ffimq.apps.googleusercontent.com
const AuthContext = createContext({
  // initial state
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAync] = Google.useAuthRequest({
    androidClientId:
      "731010029797-im813j5hhig46c03aqm4urspci8ffimq.apps.googleusercontent.com",
    iosClientId:
      "731010029797-0r20dds5fg2ht7900toce0uktgcma2ju.apps.googleusercontent.com",
    webClientId:
      "731010029797-gstb7gn26b112r9ucf2528c520g2otgd.apps.googleusercontent.com",
  });

  const signInWithGoogle = async () => {
    if (response?.type === "success") {
      // LOGIN...
    }
  };

  // useEffect(() => {
  //   handleSignInWithGoogle();
  // }, [response]);

  // const handleSignInWithGoogle = async () => {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if (response?.type === "success") {
  //       await getUserInfo(response.authentication?.accessToken);
  //     }
  //   } else {
  //     setUserInfo(JSON.parse(user));
  //   }
  // };

  // const getUserInfo = async (token: any) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch("https//www.googleapis.com/userinfo/v2/me", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch (error) {
  //     // ADD YOUR OWN ERROR HANDLER HERE
  //   }
  // };

  return (
    <AuthContext.Provider value={{ user: "Sonny" }}>
      {children}
      {/* <Button title="Sign in with Google" onPress={() => promptAync()} /> */}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
