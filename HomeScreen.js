import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const habits = ["Drink Water", "Exercise", "Meditate"];

const handleLogout = () => {
  navigation.navigate("Login");
  };

const goToProfile = () => {
  navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Habits</Text>
      {habits.map((habit, index) => (
        <Text key={index} style={styles.habit}>
          {habit}
        </Text>
      ))}
      <View style={styles.buttonContainer}>
        {/* Go to Profile Button */}
        <Button title="Go to Profile" onPress={goToProfile} color="#007BFF" />
        {/* Logout Button */}
        <Button title="Logout" onPress={handleLogout} color="#d9534f" />
      </View>
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;