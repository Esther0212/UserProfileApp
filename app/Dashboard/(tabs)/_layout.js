//C:\Users\User\OneDrive\Documents\GitHub Esther\UserProfileApp\app\Dashboard\(tabs)\_layout.js 
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Disable headers for tab screens
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#555',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarShowLabel: true,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />

      {/* User Profile Tab */}
      <Tabs.Screen
        name="UserProfile"
        options={{
          title: 'User Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={24}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={focused ? 'white' : 'black'}
            />
          ),
        }}
      />
    </Tabs>
  );
}