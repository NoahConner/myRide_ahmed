import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ToastProvider } from 'react-native-toast-notifications';
import { black, white } from './src/constants/Index';
import { AppContext, AppProvider, useAppContext } from './src/context/AppContext';
import { AuthNavigator, DrawerNavigatorScreen } from './src/stacks/Index';

export default function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </AppProvider>
  );
}

const AppContent = memo(() => {
  const {token, tokenLoader, theme} = useAppContext(AppContext);
  useEffect(() => {
    if (!tokenLoader) {
      SplashScreen.hide();
    }
  }, [tokenLoader]);

  if (tokenLoader) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme == 'dark' ? black : white,
        }}>
        <ActivityIndicator
          size="large"
          color={theme == 'dark' ? white : black}
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {token ? <DrawerNavigatorScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
});
