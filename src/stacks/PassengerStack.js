import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Contactus, Home,HowToUse,Profile, RideHistory, SavedAddresses, Setting} from '../screens/Index';
import PersonalInformation from '../screens/passengers/PersonalInformation';
const Stack = createStackNavigator();

const PassengerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RideHistory" component={RideHistory} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="HowToUse" component={HowToUse} />
      <Stack.Screen name="Contactus" component={Contactus} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
    </Stack.Navigator>
  );
};

export default PassengerStack;
