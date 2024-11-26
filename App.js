import React from "react";
import { Text, View, StyleSheet } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
