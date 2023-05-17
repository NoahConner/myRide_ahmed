import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider, useAppContext } from './src/context/AppContext';
import DrawerNavigatorScreen from './src/stacks/DrawerNavigator';
import AuthNavigator from './src/stacks/AuthStack';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 800);
  }, []);
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
