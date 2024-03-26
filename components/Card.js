import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const Card = ({ title, desc, navigation }) => {
  return (
    <Pressable
      style={{
        width: "90%",
        height: "20%",
        backgroundColor: "#FF7ED4",
        borderRadius: 20,
        flexDirection: "row",
      }}
      onPress={() => navigation.navigate("Detail")}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/giftbox.png")}
          style={{ width: 100, height: 100, position: "absolute", top: -30 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <View>
          <Text variant="titleLarge" style={{ color: "white" }}>
            {title}
          </Text>
          <Text variant="titleMedium" style={{ color: "white" }}>
            {desc}
          </Text>
        </View>
        <View
          style={{
            width: "70%",
            height: "30%",
            backgroundColor: "#FF5BAE",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <Text variant="titleMedium" style={{ color: "white" }}>
            Claim now
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({});
