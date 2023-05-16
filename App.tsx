import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/stacks/BottomTab';
import {AppProvider} from './src/context/AppContext';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
