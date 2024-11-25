// C:\Users\User\OneDrive\Documents\GitHub Esther\UserProfileApp\components\DrawerContent.js
import React from 'react';
import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();
  const year = new Date().getFullYear();

  const handleLogout = async () => {
    router.replace('/');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: top }}
      >
        {/* Drawer Logo and Profile */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20 + top,
            paddingBottom: 20,
          }}
        >
          <Image
            source={require('../assets/logo.png')}
            style={{ alignSelf: 'center' }}
          />
          <Image
            source={require('../assets/profile.jpg')}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          />
        </View>

        {/* Drawer Items */}
        <DrawerItemList {...props} />

        {/* Logout Button */}
        <DrawerItem
          label="Logout"
          icon={({ color, size, focused }) => (
            <MaterialCommunityIcons name="logout" color={focused ? 'white' : 'red'} size={size} />
          )}
          labelStyle={{ marginLeft: 0, color: 'red' }}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>

      {/* Footer with Copyright */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20 + bottom,
        }}
      >
        <Text>Copyright &copy; {year}. All rights reserved.</Text>
      </View>
    </View>
  );
}
