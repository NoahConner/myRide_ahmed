import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  CardsAndAccounts,
  Chat,
  Contactus,
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
      <Stack.Screen name="Ratings" component={Ratings} />
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
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="Chat" component={Chat} />

    </Stack.Navigator>
  );
};

export default PassengerStack;
