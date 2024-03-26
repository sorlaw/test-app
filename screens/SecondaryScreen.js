import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const SecondaryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image
          source={require("../assets/ads.jpg")}
          style={{ width: "100%", height: 300 }}
        />
        <View
          style={{
            backgroundColor: "#31363F",
            width: "100%",
            height: 60,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, padding: 5, justifyContent: "center" }}>
            <Text variant="titleMedium" style={{ color: "#B4B4B8" }}>
              App Store
            </Text>
            <Text variant="bodyMedium" style={{ color: "white" }}>
              Biar bisa lebih gercep 💛️
            </Text>
          </View>
          <View
            style={{
              padding: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                width: "75%",

                height: "50%",
                backgroundColor: "grey",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text variant="titleSmall" style={{ color: "white" }}>
                Gunakan Aplikasi
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SecondaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
