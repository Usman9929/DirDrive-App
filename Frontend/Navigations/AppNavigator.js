import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import BikeLoginrScreen from '../Screens/Biker_Screens/BikerLoginScreen';
import CustomerLoginScreen from '../Screens/Customer_Screens/CustomerLoginScreen';
import SignupScreen from '../Screens/Customer_Screens/SignupScreen';
import CustomerDashboard from '../Screens/Customer_Screens/Dashboard';
import BikerDashboard from '../Screens/Biker_Screens/Dashboard';
import BookRideScreen from '../Screens/Customer_Screens/BookRide';

// ✅ Define the Stack
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }} > 
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="Biker" component={BikeLoginrScreen}/>
        <Stack.Screen name="Customer" component={CustomerLoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Login" component={CustomerLoginScreen} />
        <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />
        <Stack.Screen name="BikerDashboard" component={BikerDashboard} />
        <Stack.Screen name="BookRideScreen" component={BookRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
