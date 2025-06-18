import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import TabNavigator from './Screens/Customer_Screens/TabNavigator';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;