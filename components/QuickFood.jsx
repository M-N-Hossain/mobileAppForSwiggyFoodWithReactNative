import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import quickFoods from "../data/quickFoods";
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = quickFoods;
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={styles.pressable} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: item.image }}
              style={styles.imageBackground}
            >
              <Text style={styles.imageOfferText}>{item.offer} OFF</Text>
            </ImageBackground>
            <Text style={styles.imageName}>{item.name}</Text>
            <View style={styles.ratingView}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.ratingText}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={styles.time}>{item.time} Mins</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headline: {
    fontSize: 17,
    fontWeight: "bold",
  },
  pressable: {
    margin: 10,
  },
  imageBackground: {
    aspectRatio: 5 / 6,
    height: 170,
  },
  imageOfferText: {
    position: "absolute",
    fontSize: 28,
    fontWeight: "900",
    color: "white",
    bottom: 10,
    left: 10,
  },
  imageName: {
    margin: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 15,
  },
  time: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
});
