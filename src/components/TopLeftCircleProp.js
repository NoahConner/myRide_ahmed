import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { purple, screenWidth } from '../constants/Index';

const TopLeftCircleProp = ({style}) => {
  const circlePropleftAnimation = useRef(new Animated.Value(-screenWidth + 150)).current;

  useEffect(() => {
    startAnimations();
  }, []);

  const startAnimations = () => {
    Animated.timing(circlePropleftAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const circlePropStyle = {
    transform: [{ translateX: circlePropleftAnimation }],
  };

  return <Animated.View style={[styles.circlePropTopleft, circlePropStyle,style]} />;
};

const styles = StyleSheet.create({
  circlePropTopleft: {
    position: 'absolute',
    top: moderateScale(-150),
    left: moderateScale(-150),
    backgroundColor: purple,
    width: moderateScale(300),
    height: moderateScale(300),
    borderRadius: moderateScale(500),
    zIndex:-1
  },
});

export default TopLeftCircleProp;