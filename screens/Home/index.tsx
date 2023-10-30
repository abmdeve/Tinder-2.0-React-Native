import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import tw from "twrnc";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

import { NavigationStackScreenProps } from "../../routes/Navigator";
import useAuth from "../../hooks/useAuth";
import { DUMMY_DATA } from "../../data/dummy";

const Home = ({ navigation }: NavigationStackScreenProps<"Home">) => {
  const { logout, user } = useAuth();
  const swiperRef = useRef<any>(null);

  console.log("user", user);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* HEADER */}
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw`h-10 w-10 rounded-full`}
            source={{ uri: "https://tinder.com/static/tinder.png" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw`h-10 w-10 rounded-full`}
            source={{ uri: "https://tinder.com/static/tinder.png" }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* END OF HEADER */}
      {/* CARDS 074318996 */}
      <View style={tw`flex-1 -mt-6 `}>
        <Swiper
          ref={swiperRef}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          containerStyle={{ backgroundColor: "transparent" }}
          onSwipedLeft={() => {
            console.log("SWIPE LEFT...");
          }}
          onSwipedRight={() => {
            console.log("SWIPE RIGHT...");
          }}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          cards={DUMMY_DATA}
          renderCard={(item) => {
            return (
              <View
                key={item.id}
                style={tw`relative bg-white h-3/4 rounded-xl`}
              >
                <Text>{item.firstName}</Text>
                <Image
                  style={tw`absolute top-0 h-full w-full rounded-xl`}
                  // source={{ uri: "https://tinder.com/static/tinder.png" }}
                  source={item.image}
                />

                <View
                  style={[
                    tw`absolute bottom-0 bg-white w-full justify-between items-center flex-row h-20 px-6 py-2 rounded-b-xl`,
                    styles.cardShadow,
                  ]}
                >
                  <View>
                    <Text style={tw`text-xl font-bold`}>
                      {item.firstName} {item.lastName}{" "}
                    </Text>
                    <Text>{item.job}</Text>
                  </View>
                  <Text style={tw`text-2xl font-bold`}>{item.age}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={tw`flex flex-row justify-evenly py-6`}>
        <TouchableOpacity
        onPress={() => swiperRef.current.swipeLeft() }
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => swiperRef.current.swipeRight() }
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
