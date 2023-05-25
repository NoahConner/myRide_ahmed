import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const DriverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Setting} />
      </>
    </Stack.Navigator>
  );
};

export default DriverStack;