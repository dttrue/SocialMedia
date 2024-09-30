import React, { useState } from "react";
import { View, Alert, TextInput, Button } from "react-native";
import style from "./style";
import axios from "axios";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState(""); 

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:1110/api/user", {
        firstName,
        lastName,
        profilePicture,
        location,
      });

      if (response.status === 200) {
        // Check status code for success
        Alert.alert("Success", "User created successfully!");
      } else {
        Alert.alert("Error", response.data.message || "An error occurred");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "Could not connect to the server");
    }
  };

  return (
    <View style={style.container}>
      <View style={style.userImageContainer}>
        <UserProfileImage profileImage={profilePicture} imageDimension={65} />
      </View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={style.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={style.input}
      />
      <TextInput
        placeholder="Profile Picture URL"
        value={profilePicture}
        onChangeText={setProfilePicture}
        style={style.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={style.input}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

export default CreateUser;
