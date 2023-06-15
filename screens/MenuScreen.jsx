import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import Modal from "react-native-modal";
import { Image } from "react-native";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const route = useRoute();
  const navigatation = useNavigation();
  const [menu, setMenu] = useState([]);

  const cart = useSelector((state) => state.cartInfo.cart);
  console.log(cart);

  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };
    fetchMenu();
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.navContainer}>
            <Ionicons
              onPress={() => navigatation.goBack()}
              name="arrow-back-outline"
              size={24}
              color="black"
            />
            <View style={styles.searchView}>
              <Ionicons name="search-outline" size={24} color="black" />
              <Text style={{ fontWeight: "600", marginLeft: 6, fontSize: 17 }}>
                Search
              </Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            {/* Name segment */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 5,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {route.params.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="ios-share-social-outline"
                  size={24}
                  color="black"
                />
                <Ionicons
                  style={{ marginLeft: 5 }}
                  name="ios-heart-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            {/* Rating segment */}
            <View style={styles.ratingView}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.ratingText}>{route.params.rating}</Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={styles.time}>{route.params.time} Mins</Text>
            </View>
            {/* Cuisines segment */}
            <Text style={{ margin: 5, color: "gray" }}>
              {route.params.cuisines}
            </Text>

            {/* Address segment */}
            <View style={{ flexDirection: "row", margin: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Outlet</Text>
              <Text style={{ fontSize: 15, color: "grey", marginLeft: 9 }}>
                {route.params.adress}
              </Text>
            </View>

            {/* time segment */}
            <View style={{ flexDirection: "row", margin: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {route.params.time} Mins
              </Text>
              <Text style={{ fontSize: 15, color: "grey", marginLeft: 9 }}>
                Home
              </Text>
            </View>

            {/* divider line */}
            <Text
              style={{
                height: 1,
                borderColor: "grey",
                borderWidth: 0.6,
                marginTop: 12,
              }}
            />

            {/* Delivery segment */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <MaterialIcons name="directions-bike" size={24} color="black" />
              <Text style={{ color: "grey", marginLeft: 8, fontSize: 15 }}>
                0-3 kms |
              </Text>
              <Text style={{ marginLeft: 10, fontSize: 15 }}>
                35 Delivery fee will apply
              </Text>
            </View>
          </View>
        </View>

        {/* Menu segment */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "600",
            marginTop: 6,
          }}
        >
          Menu
        </Text>

        {/* Second divider line */}
        <Text
          style={{
            height: 1,
            borderColor: "grey",
            borderWidth: 0.6,
            marginTop: 12,
          }}
        />
        {route.params.menu ? (
          route.params.menu.map((item, index) => (
            <FoodItem item={item} key={index} />
          ))
        ) : (
          <Text>Nothing</Text>
        )}
      </ScrollView>

      <Pressable onPress={toggleModal} style={styles.menuBookView}>
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text
          style={{ textAlign: "center", fontWeight: "500", color: "white" }}
        >
          MENU
        </Text>
      </Pressable>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 60,
            right: 20,
            borderRadius: 7,
          }}
        >
          {menu.map((item, i) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={i}
            >
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
              >
                {item.items.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: "contain" }}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    height: 290,
    backgroundColor: "#83C8E4",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  navContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer: {
    backgroundColor: "white",
    height: 200,
    borderRadius: 15,
    marginHorizontal: 30,
    marginVertical: 5,
    padding: 5,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    // margin: 5,
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
  menuBookView: {
    backgroundColor: "black",
    height: 60,
    width: 60,
    position: "absolute",
    borderRadius: 40,
    right: 10,
    bottom: 10,
    marginLeft: "auto",
    justifyContent: "center",
    alignContent: "center",
  },
});
