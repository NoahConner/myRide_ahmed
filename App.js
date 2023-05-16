import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/stacks/DrawerNavigator';
import TabNavigator from './src/stacks/BottomTab';


export default function App() {
  

  const transitionSpec = {
    open: {
      animation: 'timing',
      config: {
        duration: 500,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 500,
      },
    },
  };

  const cardStyleInterpolator = ({ current, next, layouts }) => {
    const { progress } = current;

    const translateX = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });

    const slideFromLeft = { transform: [{ translateX }] };

    return { cardStyle: slideFromLeft };
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
