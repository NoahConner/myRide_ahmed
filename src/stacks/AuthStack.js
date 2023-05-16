import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from '../context/AppContext';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import AppSplash from '../screens/AppSplash';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { setToken } = useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppSplash" component={AppSplash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;