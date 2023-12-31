import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { NavigationStackScreenProps } from "../../routes/Navigator";
import useAuth from "../../hooks/useAuth";

const Login = ({ navigation }: NavigationStackScreenProps<"Login">) => {
  const { promptAync, signInWithGoogle } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        resizeMode="cover"
        style={tw`flex-1`}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          onPress={() => {
            promptAync();
            signInWithGoogle();
            navigation.navigate("Home");
          }}
          style={[
            tw`absolute bottom-40 w-52 bg-white p-4 rounded-2xl`,
            { marginHorizontal: "25%" },
          ]}
        >
          <Text style={tw`font-semibold text-center`}>
            Sign in & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
