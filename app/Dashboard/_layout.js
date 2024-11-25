// C:\Users\User\OneDrive\Documents\GitHub Esther\UserProfileApp\app\Dashboard\_layout.js
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerContent from '../../components/DrawerContent'; // Correct path to your DrawerContent

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          drawerActiveTintColor: 'white',  // Active text color (focused item)
          drawerActiveBackgroundColor: '#555',  // Active background color (focused item)
          drawerInactiveTintColor: 'black',  // Inactive text color (unfocused item)
          drawerInactiveBackgroundColor: 'transparent', // Inactive background color
        }}
      >
        {/* Tab Layout Screen (Home, UserProfile, Settings) */}
        <Drawer.Screen
          name="(tabs)" // This will contain the tab navigation
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? 'white' : color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: 'About',
            title: 'About',
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'information' : 'information-outline'}
                color={focused ? 'white' : color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: 'Contact',
            title: 'Contact',
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'phone' : 'phone-outline'}
                color={focused ? 'white' : color}
                size={size}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}