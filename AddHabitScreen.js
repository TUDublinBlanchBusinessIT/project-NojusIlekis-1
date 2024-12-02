import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { db } from "./firebase"; // Firestore instance

const AddHabitScreen = ({ navigation }) => {
  const [habitName, setHabitName] = useState("");

  const handleAddHabit = async () => {
    if (habitName.trim() === "") {
      alert("Please enter a habit name!");
      return;
    }

    try {
      // Add a new document to the "habits" collection
      await db.collection("habits").add({
        name: habitName,
        createdAt: new Date().toISOString(),
      });

      alert("Habit added successfully!");
      setHabitName(""); // Clear input
      navigation.goBack(); // Go back to HomeScreen
    } catch (err) {
      alert(`Error adding habit: ${err.message}`);
      console.error("Error adding habit:", err);
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
