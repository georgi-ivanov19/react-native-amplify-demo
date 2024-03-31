import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import "@expo/metro-runtime";
import { withAuthenticator } from "@aws-amplify/ui-react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello sssss!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const cloudUrl = "https://djjjk9bjm164h.cloudfront.net/";
// const data = [
//   {
//     img: `${cloudUrl}tender01.jpg`,
//     name: "Korean Fried",
//     price: "20",
//     distance: "2",
//   },
//   {
//     img: `${cloudUrl}tender02.jpg`,
//     name: "Grilled",
//     price: "23",
//     distance: "5",
//   },
//   {
//     img: `${cloudUrl}tender03.jpg`,
//     name: "Fried",
//     price: "25",
//     distance: "11",
//   },
//   {
//     img: `${cloudUrl}tender04.jpg`,
//     name: "Deep Fried",
//     price: "23",
//     distance: "6",
//   },
// ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    resizeMode: "contain",
    width: 300,
    height: undefined,
  },
});

export default withAuthenticator(App);
