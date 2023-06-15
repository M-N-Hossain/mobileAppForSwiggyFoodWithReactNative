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
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ item }) => {
  const navigatation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigatation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            rating: item.rating,
            adress: item.adress,
            time: item.time,
            cuisines: item.cuisines,
            cost_for_two: item.cost_for_two,
            menu: item.menu,
          })
        }
        style={styles.pressable}
      >
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
        <View style={styles.textView}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.ratingView}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={{ marginLeft: 3 }}>.</Text>
            <Text style={styles.time}>{item.time} Mins</Text>
          </View>
          <Text style={styles.address}>{item.adress}</Text>

          {/* Pricing for two */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 30,

                height: 25,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                DKK
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          {/* Delivery */}
          <View style={styles.deliveryView}>
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={styles.deliveryText}>FREE DELIVERY</Text>
          </View>
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
  pressable: {
    flexDirection: "row",
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
  textView: {
    marginLeft: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
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
  address: {
    color: "grey",
    fontSize: 15,
    marginTop: 6,
  },
  deliveryView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  deliveryText: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 6,
  },
});
