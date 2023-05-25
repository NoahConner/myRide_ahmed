import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './CustomDrawer';
import { purple } from '../constants/Color';
import PassengerStack from './PassengerStack';
import DriverStack from './DriverStack';
import { AppContext } from '../context/AppContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigatorScreen() {
  const { role } = useContext(AppContext);

  return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerType="front"
        drawerPosition="right"
        drawerStyle={{
          backgroundColor: purple,
          width: '60%',
        }}
      >
        {role === 'passenger' ? (
          <Drawer.Screen name="Passenger" component={PassengerStack} />
        ) : (
          <Drawer.Screen name="Driver" component={DriverStack} />
        )}
      </Drawer.Navigator>
  );
}
