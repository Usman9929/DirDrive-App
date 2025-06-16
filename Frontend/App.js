import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AppNavigation from './Navigations/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  return(
    <PaperProvider>
    <AppNavigation />
    </PaperProvider>
)
}
export default App
