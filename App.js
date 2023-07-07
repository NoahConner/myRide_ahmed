import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ToastProvider } from 'react-native-toast-notifications';
import { AppContext, AppProvider, useAppContext } from './src/context/AppContext';
import { AuthNavigator, DrawerNavigatorScreen } from './src/stacks/Index';

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