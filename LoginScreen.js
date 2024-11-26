import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {TextInput, Button, Text} from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Placeholder login logic
    if (email === "test@test.com" && password === "password") {
      navigation.navigate("Home");
    } else {
      setError("Invalid email or password.");
    }
  };

    return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Welcome Back!</Text>

      {/* Email Input */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      
      {/* Password Input */}
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      
      {/* Error Message */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Updated Login Button */}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  
});

export default LoginScreen;