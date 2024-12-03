import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null); // State to store profile image URI

  const pickImage = async () => {
    try {
      // Request permission to access the media library
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert("Permission Denied", "Permission to access the media library is required.");
        return;
      }

      // Launch the image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["photo"], // Use an array of MediaType (e.g., ["photo"])
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio
        quality: 1, // High-quality image
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri); // Update the profileImage state with the selected URI
      } else {
        console.log("Image picker canceled");
      }
    } catch (error) {
      console.error("Error picking image: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Profile Picture</Text>
        </View>
      )}
      <Text style={styles.detail}>Name: John Doe</Text>
      <Text style={styles.detail}>Email: johndoe@example.com</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Change Profile Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  placeholderText: {
    color: "#666",
    fontSize: 16,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;