import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const AddHabitScreen = ({ navigation, route }) => {
  const [habitName, setHabitName] = useState("");

  const handleAddHabit = () => {
    if (habitName.trim() === "") {
      return; // Don't allow empty habits
    }

    // Get the setHabits function passed from HomeScreen
    const { setHabits } = route.params;
    setHabits((prevHabits) => [...prevHabits, habitName]); // Add new habit
    navigation.goBack(); // Return to HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Habit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter habit name"
        value={habitName}
        onChangeText={setHabitName}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddHabit}>
        <Text style={styles.buttonText}>Save Habit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddHabitScreen;
