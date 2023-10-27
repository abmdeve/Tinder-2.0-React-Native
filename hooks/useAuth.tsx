import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
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

  const [request, response, promptAync] = Google.useAuthRequest({
    androidClientId:
      "731010029797-im813j5hhig46c03aqm4urspci8ffimq.apps.googleusercontent.com",
    iosClientId:
      "731010029797-0r20dds5fg2ht7900toce0uktgcma2ju.apps.googleusercontent.com",
    webClientId:
      "731010029797-gstb7gn26b112r9ucf2528c520g2otgd.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const credential = GoogleAuthProvider.credential(
        response.authentication?.idToken
      );
      signInWithCredential(auth, credential);
    }
  }, [response]);

  

  return (
    <AuthContext.Provider
      value={{ user: "Sonny", promptAync }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
