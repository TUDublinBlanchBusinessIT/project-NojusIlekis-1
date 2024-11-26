import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  const habits = ["Drink Water", "Exercise", "Meditate"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Habits</Text>
      {habits.map((habit, index) => (
        <Text key={index} style={styles.habit}>
          {habit}
        </Text>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;