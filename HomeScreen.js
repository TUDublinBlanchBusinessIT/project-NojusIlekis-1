import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {Button, FAB} from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const [habits, setHabits] = useState(["Drink Water", "Exercise", "Meditate"]);

const handleLogout = () => {
  navigation.navigate("Login");
  };

const goToProfile = () => {
  navigation.navigate("Profile");
  };

const goToAddHabit = () => {
  navigation.navigate("AddHabit", { setHabits });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Habits</Text>
      <FlatList
        data={habits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.habit}>{item}</Text>}
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={goToProfile} style={styles.button}>
          Go to Profile
        </Button>
        <Button mode="contained" onPress={handleLogout} style={styles.logout}>
          Logout
        </Button>
      </View>
      {/* Floating Action Button */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={goToAddHabit}
        label="Add Habit"
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginRight: 8,
  },
  logout: {
    backgroundColor: "#d9534f",
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#6200EE",
  },
});

export default HomeScreen;