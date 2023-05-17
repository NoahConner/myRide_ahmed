import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './BottomTab';
import CustomDrawerContent from './CustomDrawer';
import { purple } from '../constants/Color';

const Drawer = createDrawerNavigator();

export default function DrawerNavigatorScreen() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        headerShown: true,
        drawerStyle: {
          backgroundColor: purple,
          width: '60%',
        },
      }}>
      <Drawer.Screen name="Drawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
