import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import { Text } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Card
        title="Daily Reward"
        desc="Earn up to 100 Coins"
        navigation={navigation}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
