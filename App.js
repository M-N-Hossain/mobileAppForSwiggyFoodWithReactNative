import { StyleSheet, Text, View, Platform } from "react-native";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 35,
  },
});
