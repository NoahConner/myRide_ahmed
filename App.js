import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import { ToastProvider } from 'react-native-toast-notifications';
import { backgroundColor } from './src/constants/Index';
import { AppContext, AppProvider, useAppContext } from './src/context/AppContext';
import { AuthNavigator, DrawerNavigatorScreen } from './src/stacks/Index';
export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </SafeAreaView>
    </AppProvider>
  );
}

const AppContent = memo(() => {
  const { token } = useAppContext(AppContext);
  useEffect(() => {
      RNBootSplash.hide({ fade: true, duration: 500 });
      console.log('splash dhiixxs');
  }, []);
  return (
    <NavigationContainer>
      {token ? <DrawerNavigatorScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
});
