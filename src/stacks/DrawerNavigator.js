import React, { useContext, useMemo, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { purple } from '../constants/Index';
import { AppContext } from '../context/AppContext';
import { DriverStack, PassengerStack, CustomDrawerContent } from './Index';
import { io } from 'socket.io-client';

// socket initializing
  export const socket = io('https://myride.herokuapp.com');
  //export const socket = io('http://192.168.18.212:3000');
  // export const socket = io('http://192.168.1.113:3000');
const Drawer = createDrawerNavigator();
export default function DrawerNavigatorScreen() {
  const { role } = useContext(AppContext);

  const drawerContent = useMemo(() => props => <CustomDrawerContent {...props} />, []);

  useEffect(() => {
    const handleConnect = () => {
      console.log('Socket connected');
    };

    const handleDisconnect = reason => {
      console.log('Socket disconnected');
      console.log('Reason:', reason);
    };

    const handleError = error => {
      console.error('Socket error:', error);
    };

    const handleConnectError = error => {
      console.error('Connection error:', error);
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('error', handleError);
    socket.on('connect_error', handleConnectError);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('error', handleError);
      socket.off('connect_error', handleConnectError);
    };
  }, []);

  const initialRouteName = role === 'passenger' ? 'Passenger' : 'Driver';
  const screenName = role === 'Passenger' ? 'Passenger' : 'Driver';
  const ScreenComponent = role === 'Passenger' ? PassengerStack : DriverStack;

  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      drawerType="front"
      drawerPosition="right"
      initialRouteName={initialRouteName}
      
    >
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name={screenName}
        component={ScreenComponent}
      />
    </Drawer.Navigator>
  );
}