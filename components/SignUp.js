// components/Login.js
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    navigation.navigate('Login');
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    navigation.navigate('UserProfile');
  };

  const handleSignUp = () => {
    // Add your sign up logic here
    navigation.navigate('Login');
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

      {/* Input fields and sign up button */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email:</Text>
          <TextInput 
            style={styles.input}
            placeholder='Enter your email'
          />
          <Text style={styles.labelText}>Password:</Text>
          
          {/* password */}
          <View style={styles.passwordContainer}>
            <TextInput 
              style={styles.passwordInput}
              placeholder='Enter your password'
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons 
                name={passwordVisible ? 'eye' : 'eye-off'} 
                size={24} 
                color="gray" 
                style={styles.eyeIcon} 
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.labelText}>Confirm Password:</Text>

          {/* confirm password */}
          <View style={styles.confirmPasswordContainer}>
            <TextInput 
              style={styles.confirmPasswordInput}
              placeholder='Confirm password'
              secureTextEntry={!confirmPasswordVisible}
            />
            <TouchableOpacity onPress={() => setconfirmPasswordVisible(!confirmPasswordVisible)}>
              <Ionicons 
                name={confirmPasswordVisible ? 'eye' : 'eye-off'} 
                size={24} 
                color="gray" 
                style={styles.eyeIcon} 
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <MaterialIcons name='login' color='white' size={25}/>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>

          {/* "or" with horizontal lines */}
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.separator} />
          </View>

          {/* Other sign in method buttons */}
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <AntDesign name='google' color='black' size={25}/>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          {/* Login section */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
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
  // Input fields and sign up button
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%', 
    marginBottom: 20, 
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, 
    alignSelf: 'flex-start', 
  },
  input: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  // password
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  // confirm password
  confirmPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  confirmPasswordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  signupButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  signupText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
  //"or" with horizontal lines
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%', 
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: 5, 
  },
  orText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'gray',
  },
  // Other sign in method buttons
  googleButton: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  googleButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "black",
    marginLeft: 10,
  },
  // Login section
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    marginTop: 20,
    fontSize: 18,
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#777',
  },
});

export default Login;
