import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { db } from "./firebase"; // Import Firestore instance

const AddHabitScreen = ({ navigation }) => {
  const [habitName, setHabitName] = useState("");

  const handleAddHabit = async () => {
    if (habitName.trim() === "") {
      Alert.alert("Validation Error", "Please enter a habit name!");
      return;
    }

    try {
      console.log("Attempting to write to Firestore...");
      await db.collection("habits").add({
        name: habitName,
        createdAt: new Date().toISOString(),
        completed: false, // Default value
      });
      Alert.alert("Success", "Habit added successfully!", [
        {
          text: "OK",
          onPress: () => {
            setHabitName(""); // Clear the input field
            navigation.goBack(); // Navigate back to the home screen
          },
        },
      ]);
    } catch (error) {
      console.error("Error adding habit to Firestore:", error);
      Alert.alert("Error", `Failed to add habit: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Habit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter habit name"
        value={habitName}
        onChangeText={setHabitName}
        placeholderTextColor="#666"
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
