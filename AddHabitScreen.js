import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { db } from "./firebase"; // Ensure firebase.js is properly configured

const AddHabitScreen = ({ navigation }) => {
  const [habitName, setHabitName] = useState("");
  const [message, setMessage] = useState(""); // Fallback message for errors or success

  const handleAddHabit = async () => {
    // Validation for empty input
    if (habitName.trim() === "") {
      Alert.alert("Validation Error", "Please enter a habit name!"); // Show validation alert
      setMessage("Please enter a habit name!");
      return;
    }

    try {
      // Save habit to Firestore
      await db.collection("habits").add({
        name: habitName,
        createdAt: new Date().toISOString(),
      });

      // Success alert
      Alert.alert(
        "Success",
        "Habit added successfully!",
        [
          {
            text: "OK",
            onPress: () => {
              setHabitName(""); // Clear input field
              setMessage(""); // Clear any fallback message
              navigation.goBack(); // Navigate back to HomeScreen
            },
          },
        ],
        { cancelable: false }
      );

      setMessage("Habit added successfully!"); // Set fallback success message
    } catch (err) {
      // Error alert
      Alert.alert("Error", `Failed to add habit: ${err.message}`);
      setMessage(`Error: ${err.message}`); // Set fallback error message
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
      />
      <TouchableOpacity style={styles.button} onPress={handleAddHabit}>
        <Text style={styles.buttonText}>Save Habit</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.alert}>{message}</Text> : null} {/* Fallback message */}
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
  alert: {
    marginTop: 20,
    color: "green", // Default to green for success
    textAlign: "center",
    fontSize: 16,
  },
});

export default AddHabitScreen;
