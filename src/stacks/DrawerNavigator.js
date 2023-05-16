import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './BottomTab';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigatorScreen() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: '60%',
        },
      }}>
      <Drawer.Screen name="Drawer" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
