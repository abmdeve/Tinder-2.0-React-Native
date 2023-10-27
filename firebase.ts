// IMPORT TJE FUNCTIONSS YOU NEED FROM THE SDKs YOU NEED
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
} from "firebase/auth";
import { ReactNativeAsyncStorage } from "firebase/auth";
// TODO: ADD SDKs FOR FIREBASE PRODUCTS THAT YOU WANT TO USE
// htttpss://firebase.google.com/docs/web/setup#available-librairies

// YOUR WEB APP'S FIREBASE CONFIGURATION

// const firebaseConfig = {
// hidetream
// hidetream
// hidetream
// hidetream
// hidetream
// hidetream
// };
const firebaseConfig = {
  apiKey: "AIzaSyAdZ2G3tKzm7o2YBgaL_IhfG_8_Dan_3ac",
  authDomain: "tinder-2-yt-b063f.firebaseapp.com",
  projectId: "tinder-2-yt-b063f",
  storageBucket: "tinder-2-yt-b063f.appspot.com",
  messagingSenderId: "731010029797",
  appId: "1:731010029797:web:516cb041c084a867f09c0c",
};
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const auth = getAuth();
const db = getFirestore();

export { auth, db };

// [2023-10-27T12:41:59.977Z]  @firebase/auth: Auth (10.5.2):
// You are initializing Firebase Auth for React Native without providing
// AsyncStorage. Auth state will default to memory persistence and will not
// persist between sessions. In order to persist auth state, install the package
// "@react-native-async-storage/async-storage" and provide it to
// initializeAuth:
