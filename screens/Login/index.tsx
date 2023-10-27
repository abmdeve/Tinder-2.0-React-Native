import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationStackScreenProps } from "../../routes/Navigator";
import useAuth from "../../hooks/useAuth";

const Login = ({ navigation }: NavigationStackScreenProps<"Login">) => {
  const { promptAync } = useAuth();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="GO TO HOME SCREEN..."
        // onPress={() => navigation.navigate("Home")}
        onPress={() => {
          promptAync();
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
