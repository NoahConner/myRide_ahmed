import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/stacks/BottomTab';
import { AppProvider, useAppContext } from './src/context/AppContext';
import DrawerNavigatorScreen from './src/stacks/DrawerNavigator';
import AuthNavigator from './src/stacks/AuthStack';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { token } = useAppContext(); 
  return (
    <NavigationContainer>
      {token ? <DrawerNavigatorScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
