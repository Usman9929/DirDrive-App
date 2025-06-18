import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import CustomDashboard from './Dashboard';
import BikerScreen from './BikerScreen';
import NotificationsScreen from './Notification';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          const iconStyle = {
            width: size,
            height: size,
            tintColor: color,
          };

          if (route.name === 'Home') {
            iconSource = require('../../assets/icons/home.png');
          } else if (route.name === 'Rides') {
            iconSource = require('../../assets/icons/person.png');
          } else if (route.name === 'Notifications') {
            iconSource = require('../../assets/icons/notification.png');
          } else if (route.name === 'Profile') {
            iconSource = require('../../assets/icons/profile.png');
          }

          return <Image source={iconSource} style={iconStyle} />;
        },
        tabBarActiveTintColor: 'tomato', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarShowLabel: false, // Hide text labels if you want
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 60,
        },
        headerShown: false // Hide header for all screens
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={CustomDashboard} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Rides" 
        component={BikerScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;