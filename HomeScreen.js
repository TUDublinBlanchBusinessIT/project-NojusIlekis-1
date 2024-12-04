import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { db } from "./firebase"; // Firestore instance

const HomeScreen = ({ navigation }) => {
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch habits from Firestore
  const fetchHabits = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await db.collection("habits").get();
      setHabits(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    } catch (error) {
      console.error("Error fetching habits:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a habit from Firestore and update local state
  const deleteHabit = async (habitId) => {
    try {
      await db.collection("habits").doc(habitId).delete(); // Delete from Firestore
      setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId)); // Update state
      console.log("Habit deleted successfully");
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  useEffect(() => {
    fetchHabits();
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
      {isLoading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={habits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.habitContainer}>
              <Text style={styles.habit}>{item.name}</Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteHabit(item.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
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
  habitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  habit: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
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