// components/ResetPassword.js
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity,} from 'react-native'
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const ResetPassword = ({navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(false);

    const handleReset = () => {
        // Add your authentication logic here
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

        {/* Reset account password */}
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.resetText}>Reset Account Password</Text>

                <Text style={styles.confirmedEmailText}>Enter a new password for noreply@gmail.com</Text>

                {/* Password */}
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
            </View>

            {/* Reset password button */}
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <AntDesign name='back' color='white' size={25}/>
            <Text style={styles.resetButtonText}>Reset password</Text>
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
  // Reset account password
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%', 
    marginBottom: 20, 
  },
  resetText: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  confirmedEmailText: {
    fontSize: 18,
    textAlign: 'justify',
    marginTop: 30,
    alignSelf: 'center',
  },
  // Password
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 30,
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
  },
  confirmPasswordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  // Reset password button
  resetButton: {
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  resetButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  }, 
});    

export default ResetPassword