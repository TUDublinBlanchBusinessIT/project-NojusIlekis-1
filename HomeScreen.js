import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { db } from "./firebase"; // Firestore instance

const HomeScreen = ({ navigation }) => {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    try {
      const querySnapshot = await db.collection("habits").get(); // Fetch documents
      const habitList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHabits(habitList); // Update state with fetched data
    } catch (error) {
      alert(`Error fetching habits: ${error.message}`);
      console.error("Error fetching habits:", error);
    }
  };

  useEffect(() => {
    fetchHabits(); // Fetch habits when the component mounts
  }, []);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToAddHabit = () => {
    navigation.navigate("AddHabit");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Habits</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.habit}>{item.name}</Text>}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToProfile}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logout]} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.fab} onPress={goToAddHabit}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logout: {
    backgroundColor: "#d9534f",
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#6200EE",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  fabText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;