import React from 'react';
import {View, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {moderateScale} from 'react-native-size-matters';

import {HomeStack, ProfileStack, SettingsStack} from './StackNavigation';
import {black, white, gold} from '../constants/Color';
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        display: 'flex',
        paddingVertical: moderateScale(5, 0.1),
        backgroundColor: black,
        width: '100%',
        height:
          Platform.OS === 'ios'
            ? moderateScale(90, 0.1)
            : moderateScale(45, 0.1),
        borderTopLeftRadius: moderateScale(25, 0.1),
        borderTopRightRadius: moderateScale(25, 0.1),
        elevation: 4,
        position: 'absolute',
        borderTopColor: black,
      },
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'gear' : 'gear';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        }

        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon name={iconName} size={30} color={focused ? gold : white} />
          </View>
        );
      },
    })}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Settings" component={SettingsStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
  </Tab.Navigator>
);

export default TabNavigator;
