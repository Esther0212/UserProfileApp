import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
  Platform
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Import ImagePicker
/* ---- Icons ---- */
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const UserProfile = ({navigation}) => {
  const [editing, setEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "Esther Beuthel G. Eblacas",
    username: "@everwing",
    email: "eblacas.estherbeuthel@gmail.com",
    phone: "09367813089",
    location: "Carmen, CDO",
    dob: "December 14, 2002",
    aboutMe: "I love cats.",
    occupation: "Student",
    education: "University of Science and Technology of Southern Philippines",
    website: "www.example.com",
    hobbies: "Gaming, Drawing",
    skills: "A bit of programming",
    profilePicture: require("../assets/profile.jpg"),
    coverPicture: require("../assets/cover.jpg"),
  });

  const saveProfile = () => {
    setEditing(false);
    Alert.alert("Profile Saved", "Your profile information has been saved.");
  };

  const deleteProfile = () => {
    setProfileData({
      fullName: "",
      username: "",
      email: "",
      phone: "",
      location: "",
      dob: "",
      aboutMe: "",
      occupation: "",
      education: "",
      website: "",
      hobbies: "",
      skills: "",
      profilePicture: require("../assets//profile.jpg"),
      coverPicture: require("../assets/cover.jpg"),
    });
    Alert.alert("Profile Deleted", "All profile information has been cleared.");
  };

  const handleChange = (key, value) => {
    setProfileData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  // Function to pick an image
  const pickImage = async (type) => {
    try {
      // Request media library permissions if not already granted
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission Denied", "Sorry, we need camera roll permissions to make this work!");
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;
        if (type === "profile") {
          setProfileData((prevData) => ({ ...prevData, profilePicture: { uri: selectedImage } }));
        } else if (type === "cover") {
          setProfileData((prevData) => ({ ...prevData, coverPicture: { uri: selectedImage } }));
        }
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "An error occurred while selecting the image.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.coverImageContainer}>
          <TouchableOpacity onPress={() => editing && pickImage("cover")} disabled={!editing}>
            <Image source={profileData.coverPicture} style={styles.coverImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={() => editing && pickImage("profile")} disabled={!editing}>
            <Image
              source={profileData.profilePicture}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Full Name Row */}
        <View style={styles.row}>
          {editing ? (
            <>
              <FontAwesome5 name="user-alt" size={24} color="black" />
              <Text style={styles.label}>Full Name:</Text>
              <TextInput
                style={styles.input}
                value={profileData.fullName}
                onChangeText={(value) => handleChange("fullName", value)}
                placeholder="Full Name"
              />
            </>
          ) : (
            <Text style={[styles.value, styles.boldValue, styles.centeredText]}>
              {profileData.fullName === "" ? "-" : profileData.fullName}
            </Text>
          )}
        </View>

        {/* Username Row */}
        <View style={styles.row}>
          {editing ? (
            <>
              <AntDesign name="infocirlce" size={24} color="black" />
              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={styles.input}
                value={profileData.username}
                onChangeText={(value) => handleChange("username", value)}
                placeholder="Username"
              />
            </>
          ) : (
            <Text style={[styles.value, styles.centeredText]}>
              {profileData.username === "" ? "-" : profileData.username}
            </Text>
          )}
        </View>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Basic Information</Text>

        <View style={styles.row}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={styles.label}>Email:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.email}
              onChangeText={(value) => handleChange("email", value)}
              placeholder="Email"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.email === "" ? "-" : profileData.email}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Entypo name="phone" size={24} color="black" />
          <Text style={styles.label}>Phone:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.phone}
              onChangeText={(value) => handleChange("phone", value)}
              placeholder="Phone"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.phone === "" ? "-" : profileData.phone}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <FontAwesome5 name="location-arrow" size={24} color="black" />
          <Text style={styles.label}>Location:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.location}
              onChangeText={(value) => handleChange("location", value)}
              placeholder="Location"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.location === "" ? "-" : profileData.location}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <FontAwesome name="calendar" size={24} color="black" />
          <Text style={styles.label}>Date of Birth:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.dob}
              onChangeText={(value) => handleChange("dob", value)}
              placeholder="Date of Birth"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.dob === "" ? "-" : profileData.dob}
            </Text>
          )}
        </View>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Profile Details</Text>

        <View style={styles.row}>
          <Octicons name="question" size={24} color="black" />
          <Text style={styles.label}>About Me:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.aboutMe}
              onChangeText={(value) => handleChange("aboutMe", value)}
              placeholder="About Me"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.aboutMe === "" ? "-" : profileData.aboutMe}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <MaterialIcons name="work" size={24} color="black" />
          <Text style={styles.label}>Occupation:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.occupation}
              onChangeText={(value) => handleChange("occupation", value)}
              placeholder="Occupation"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.occupation === "" ? "-" : profileData.occupation}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Ionicons name="school" size={24} color="black" />
          <Text style={styles.label}>Education:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.education}
              onChangeText={(value) => handleChange("education", value)}
              placeholder="Education"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.education === "" ? "-" : profileData.education}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name="web" size={24} color="black" />
          <Text style={styles.label}>Website:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.website}
              onChangeText={(value) => handleChange("website", value)}
              placeholder="Website"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.website === "" ? "-" : profileData.website}
            </Text>
          )}
        </View>

        <View style={styles.horizontalLine} />
        <Text style={styles.sectionTitle}>Interests and Preferences</Text>

        <View style={styles.row}>
          <AntDesign name="heart" size={24} color="black" />
          <Text style={styles.label}>Hobbies:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.hobbies}
              onChangeText={(value) => handleChange("hobbies", value)}
              placeholder="Hobbies"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.hobbies === "" ? "-" : profileData.hobbies}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <FontAwesome6 name="bars-progress" size={24} color="black" />
          <Text style={styles.label}>Skills:</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={profileData.skills}
              onChangeText={(value) => handleChange("skills", value)}
              placeholder="Skills"
            />
          ) : (
            <Text style={styles.value}>
              {profileData.skills === "" ? "-" : profileData.skills}
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={editing ? saveProfile : () => setEditing(true)}
          >
            <Text style={styles.buttonText}>
              {editing ? "Save Changes" : "Edit Profile"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={deleteProfile}
          >
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLine} />

         {/* Logout Button */}
         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  coverImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#eee",
    marginBottom: 40,
    borderRadius: 20,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  profileImageContainer: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    marginTop: -80,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "#fff",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
    marginLeft: 5, // Add margin here for spacing
  },
  value: {
    flex: 2,
    fontSize: 16,
    color: "#555",
  },
  centeredText: {
    textAlign: "center", // Center the text
    flex: 1, // Allow the text to take equal space in the row
  },
  boldValue: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
  input: {
    flex: 2,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: "#555",
  },
  deleteButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default UserProfile;
