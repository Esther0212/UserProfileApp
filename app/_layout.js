//C:\Users\User\OneDrive\Documents\GitHub Esther\UserProfileApp\app\_layout.js
import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Define the root screen here */}
          <Stack.Screen name="Dashboard" />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;