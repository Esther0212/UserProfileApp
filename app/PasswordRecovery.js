// components/PasswordRecovery.js
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, TouchableOpacityComponent, } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const PasswordRecovery = ({ navigation }) => {
  const router = useRouter();

  const handleContinue = () => {
    // Add your authentication logic here
    router.push('ResetPassword');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Logo and tagline */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.taglineText}>Your partner in progress</Text>
      </View>

      {/* Enter email text */}
      <View style={styles.enterEmailContainer}>
        <Text style={styles.enterEmailText}>
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </Text>

        {/* Email input field */}
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <MaterialIcons name='arrow-forward' color='white' size={25}/>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        
        {/* Continue button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.back("index")}>
          <Text style={styles.loginText}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    paddingTop: 20,
  },
  // Logo and tagline
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 100,
    marginTop: 100,
  },
  taglineText: {
    fontWeight: 'bold',
  },
  // Enter email text
  enterEmailContainer: {
    width: '100%',
    alignItems: 'center',
  },
  enterEmailText: {
    width: '80%',
    fontSize: 18,
    textAlign: 'justify',
  },
  // Email input field
  emailInput: {
    width: '80%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20, // Space between text and input field
  },
  // Continue button
  continueButton: {
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  continueText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  }, 
  loginButton: {
    marginTop: 20,
  },
  loginText: {
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#777',
  },
});

export default PasswordRecovery;
