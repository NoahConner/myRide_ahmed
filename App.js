import React, { useEffect, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { AppContext, AppProvider, useAppContext } from './src/context/AppContext';
import { DrawerNavigatorScreen, AuthNavigator } from './src/stacks/Index';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  useEffect(() => {
      SplashScreen.hide();
  }, []);

  return (
    <AppProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </AppProvider>
  );
}

const AppContent = memo(() => {
  const { token } = useAppContext(AppContext);
  return (
    <NavigationContainer>
      {token ? <DrawerNavigatorScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
});