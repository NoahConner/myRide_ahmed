import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CardsAndAccounts,
  Contactus,
  Help,
  Home,
  HowToUse,
  Notifications,
  PersonalInformation,
  PrivacyPolicy,
  Profile,
  RideHistory,
  SavedAddresses,
  TermsAndConditions,
} from '../screens/Index';
const Stack = createStackNavigator();

const PassengerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RideHistory" component={RideHistory} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="Contactus" component={Contactus} />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="HowToUse" component={HowToUse} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="CardsAndAccounts" component={CardsAndAccounts} />
      <Stack.Screen name="Notifications" component={Notifications} />

    </Stack.Navigator>
  );
};

export default PassengerStack;
