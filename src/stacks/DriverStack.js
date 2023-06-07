import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CardsAndAccounts,
  Chat,
  Help,
  Home,
  HowToUse,
  ModalScreen,
  Notifications,
  PersonalInformation,
  PrivacyPolicy,
  Profile,
  Ratings,
  RideHistory,
  TermsAndConditions,
  Wallet,
} from '../screens/Index';
const Stack = createStackNavigator();
const DriverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RideHistory" component={RideHistory} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Ratings" component={Ratings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="HowToUse" component={HowToUse} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="CardsAndAccounts" component={CardsAndAccounts} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="Chat" component={Chat} />
      </>
    </Stack.Navigator>
  );
};

export default DriverStack;
