import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import BikeLoginrScreen from '../Screens/Biker_Screens/BikerLoginScreen';
import CustomerLoginScreen from '../Screens/Customer_Screens/CustomerLoginScreen';
import SignupScreen from '../Screens/Customer_Screens/SignupScreen';
import CustomerDashboard from '../Screens/Customer_Screens/Dashboard';
import BikerDashboard from '../Screens/Biker_Screens/Dashboard';
import BookRideScreen from '../Screens/Customer_Screens/BookRideScreen';
import MyRidesScreen from '../Screens/Customer_Screens/MyRideScreen';
import TabNavigator from '../Screens/Customer_Screens/TabNavigator';
import SupportCenter from '../Screens/Customer_Screens/Support';
import ScannerScreen from '../Screens/Customer_Screens/Scanner';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} > 
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="Biker" component={BikeLoginrScreen}/>
        <Stack.Screen name="Customer" component={CustomerLoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Login" component={CustomerLoginScreen} />
        <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />
        <Stack.Screen name="BikerDashboard" component={BikerDashboard} />
        <Stack.Screen name="BookRide" component={BookRideScreen} />
        <Stack.Screen name="MyRides" component={MyRidesScreen} />
        <Stack.Screen name="SupportCenter" component={SupportCenter} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
      </Stack.Navigator>

  );
};

export default AppNavigation;
