import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AddHabitScreen from "./AddHabitScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// Tab Navigator for Home, Profile, and Add Habit screens
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Add Habit" component={AddHabitScreen} />
  </Tab.Navigator>
);

// Main App Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // No header for login screen
        />
        {/* Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }} // No header for tab navigation
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
