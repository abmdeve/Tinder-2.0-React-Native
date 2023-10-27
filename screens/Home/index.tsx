import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationStackScreenProps } from "../../routes/Navigator";
import useAuth from "../../hooks/useAuth";

const Home = ({ navigation }: NavigationStackScreenProps<"Home">) => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>I am a Home</Text>
      <Button
        title="GO TO CHATS SCREEN..."
        onPress={() => navigation.navigate("Chats")}
      />
      <Button
        title="LOGOUT..."
        onPress={() => {
          logout();
          navigation.navigate("Login");
        }}
        // onPress={logout}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
