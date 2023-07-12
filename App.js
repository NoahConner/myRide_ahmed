import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { ActivityIndicator, Platform, SafeAreaView, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ToastProvider } from 'react-native-toast-notifications';
import { backgroundColor, black, white } from './src/constants/Index';
import { AppContext, AppProvider, useAppContext } from './src/context/AppContext';
import { AuthNavigator, DrawerNavigatorScreen } from './src/stacks/Index';

export default function App() {
  return (
    <AppProvider>
      <ToastProvider>
        {
          Platform.OS == 'ios' ?
            <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
              <AppContent />
            </SafeAreaView> : <AppContent />
        }
      </ToastProvider>
    </AppProvider>
  );
}

const AppContent = memo(() => {
  const { token } = useAppContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      console.log('splash dhiixxs');
    }, Platform.OS == 'ios' ? 1500 : 1000);
  }, []);
  return (
    <NavigationContainer>
      {token ? <DrawerNavigatorScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
});
