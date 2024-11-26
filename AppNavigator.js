import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen"; // Ensure the paths are correct
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login Page" }}
        />
        {/* Define Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Dashboard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
