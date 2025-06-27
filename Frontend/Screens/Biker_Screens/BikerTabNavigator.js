// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './Dashboard';
import HistoryScreen from './HistoryScreen';
import EarningsScreen from './EarningScreen';
import BikerProfile from './BikerProfile';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BikerTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;

          switch (route.name) {
            case 'Dashboard':
              icon = require('../../assets/icons/dashboard.png');
              break;
            case 'History':
              icon = require('../../assets/icons/history.png');
              break;
            case 'Earnings':
              icon = require('../../assets/icons/profit.png');
              break;
            case 'BikerProfile':
              icon = require('../../assets/icons/profile.png');
              break;
            default:
              break;
          }

          return (
            <Image
              source={icon}
              style={[
                styles.icon,
                { tintColor: focused ? '#4CAF50' : '#888' },
              ]}
            />
          );
        },
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.5,
          borderColor: '#ccc',
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Earnings" component={EarningsScreen} />
      <Tab.Screen name="BikerProfile" component={BikerProfile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default BikerTabNavigator;
