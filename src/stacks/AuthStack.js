import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AppSplash, CapatainLogin, CapatainSignUp, ChangePassword, ForgotPassword, Login, SignUp } from '../screens/Index';
const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { role } = useContext(AppContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AppSplash" component={AppSplash} />
      {role?.toLowerCase() === 'passenger' ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </>
      ) : role?.toLowerCase() === 'driver' ? (
        <>
          <Stack.Screen name="CapatainLogin" component={CapatainLogin} />
          <Stack.Screen name="CapatainSignup" component={CapatainSignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </>
      ) : null}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
