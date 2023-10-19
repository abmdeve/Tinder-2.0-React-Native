import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationStackScreenProps } from "../../routes/Navigator";

const Home = ({ navigation }: NavigationStackScreenProps<"Home">) => {
  return (
    <View>
      <Text>I am a Home</Text>
      <Button
        title="GO TO CHATS SCREEN..."
        onPress={() => navigation.navigate("Chats")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
