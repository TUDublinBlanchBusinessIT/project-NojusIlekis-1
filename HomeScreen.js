import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const habits = ["Drink Water", "Exercise", "Meditate"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Habits</Text>
      {habits.map((habit, index) => (
        <Text key={index} style={styles.habit}>
          {habit}
        </Text>
      ))}
      {/* Button to navigate to ProfileScreen */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  habit: {
    fontSize: 18,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
});

export default HomeScreen;