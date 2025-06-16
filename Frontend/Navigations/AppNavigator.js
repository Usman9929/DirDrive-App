import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import BikeLoginrScreen from '../Screens/Biker_Screens/BikerLoginScreen';
import CustomerLoginScreen from '../Screens/Customer_Screens/CustomerLoginScreen';
import SignupScreen from '../Screens/Customer_Screens/SignupScreen';

// ✅ Define the Stack
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="Biker" component={BikeLoginrScreen}/>
        <Stack.Screen name="Customer" component={CustomerLoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Login" component={CustomerLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
