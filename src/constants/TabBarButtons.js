import React from 'react';
import { View, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'react-native-linear-gradient';
export const TabBarButton = ({ children, onPress, focused }) => {
    const backgroundColor = focused
      ? ['#ff9a9e', '#fad0c4'] // Gradient colors for the active tab
      : '#fff'; // Default color for inactive tabs
  
    return (
      <Animated.View style={{ flex: 1 }}>
        <LinearGradient
          colors={backgroundColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            borderTopLeftRadius: moderateScale(25, 0.1),
            borderTopRightRadius: moderateScale(25, 0.1),
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onPress}
          >
            {children}
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    );
  };