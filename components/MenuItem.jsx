import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const MenuItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.image}
            imageStyle={{ borderRadius: 8 }}
          >
            <AntDesign
              name="hearto"
              size={24}
              color="white"
              style={styles.heartIcon}
            />
          </ImageBackground>
        </View>
        
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
  image: {
    aspectRatio: 4 / 5,
    height: 170,
  },
  heartIcon: {
    top: 10,
    right: 10,
    position: "absolute",
  },
});
