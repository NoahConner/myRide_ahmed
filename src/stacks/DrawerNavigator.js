import React, {useContext, useMemo, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {purple} from '../constants/Index';
import {AppContext} from '../context/AppContext';
import {DriverStack, PassengerStack, CustomDrawerContent} from './Index';
import socket from '../Utils/Socket';

const Drawer = createDrawerNavigator();

export default function DrawerNavigatorScreen() {
  const {role} = useContext(AppContext);

  const drawerContent = useMemo(
    () => props => <CustomDrawerContent {...props} />,
    [],
  );

  const initialRouteName = role === 'passenger' ? 'Passenger' : 'Driver';
  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('Socket connected');
  //   });
  //   socket.on('disconnect', reason => {
  //     console.log('Socket disconnected');
  //     console.log('Reason:', reason);
  //   });
  //   socket.on('error', error => {
  //     console.error('Socket error:', error);
  //   });
  //   socket.on('connect_error', error => {
  //     console.log('Connection error:', error);
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [socket]);
  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      drawerType="front"
      drawerPosition="right"
      drawerStyle={{
        width: '60%',
      }}
      initialRouteName={initialRouteName}>
      {role === 'Passenger' ? (
        <Drawer.Screen
          options={{
            headerShown: false,
          }}
          name="Passenger"
          component={PassengerStack}
        />
      ) : (
        <Drawer.Screen
          options={{
            headerShown: false,
          }}
          name="Driver"
          component={DriverStack}
        />
      )}
    </Drawer.Navigator>
  );
}
