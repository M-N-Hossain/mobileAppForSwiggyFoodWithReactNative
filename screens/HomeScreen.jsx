import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import Hotel from "../components/Hotel";

export default function HomeScreen() {
  const data = hotels;
  return (
    <ScrollView>
      {/* Search Bar section */}
      <View style={styles.searchView}>
        <TextInput
          style={styles.textInput}
          placeholder="Search for restaurent item or more"
        />
        <AntDesign name="search1" size={24} color="#D22B2B" />
      </View>
      {/* Image slider section */}
      <Carousel />
      {/* Food types */}
      <FoodTypes />
      {/* Quick food section */}
      <QuickFood />

      {/* Filter buttons */}
      <View style={styles.buttonsView}>
        <Pressable style={styles.buttons}>
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={24} color="black" />
        </Pressable>
        <Pressable style={{ ...styles.buttons, width: 120 }}>
          <Text>Sort by rating</Text>
        </Pressable>
        <Pressable style={{ ...styles.buttons, width: 120 }}>
          <Text>Sort by price</Text>
        </Pressable>
      </View>

      {/* Menu items section */}
      {data.map((item, index) => (
        <Hotel key={index} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7,
    margin: 10,
    padding: 10,
  },
  textInput: {
    fontSize: 17,
  },
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttons: {
    flexDirection: "row",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
