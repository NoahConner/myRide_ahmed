import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="HomeStack" component={Home} />
  </Stack.Navigator>
);

export const SettingsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SettingsStack" component={Setting} />
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ProfileStack" component={Profile} />
  </Stack.Navigator>
);
