import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import { ToastProvider } from 'react-native-toast-notifications';
import { backgroundColor } from './src/constants/Index';
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
      RNBootSplash.hide({ fade: true, duration: 500 });
      console.log('splash dhiixxs');
    }, Platform.OS == 'ios' ? 1500 : 1000);
  }, []);
  return (
    <NavigationContainer>
      {token ? <DrawerNavigatorScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
});
