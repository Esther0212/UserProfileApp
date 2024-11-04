// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import PasswordRecovery from './components/PasswordRecovery';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Hide header for Login
        />
        <Stack.Screen 
          name="UserProfile" 
          component={UserProfile} 
          options={{ headerShown: false }} // Hide header for UserProfile
        />
        <Stack.Screen 
          name="PasswordRecovery" 
          component={PasswordRecovery} 
          options={{ headerShown: false }} // Hide header for UserProfile
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} // Hide header for UserProfile
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPassword} 
          options={{ headerShown: false }} // Hide header for UserProfile
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
