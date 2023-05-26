import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { purple, screenWidth } from '../constants/Index';

const TopLeftCircleProp = () => {
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

  return <Animated.View style={[styles.circlePropTopleft, circlePropStyle]} />;
};

const styles = StyleSheet.create({
  circlePropTopleft: {
    position: 'absolute',
    top: moderateScale(-150, 0.1),
    left: moderateScale(-150, 0.1),
    backgroundColor: purple,
    width: moderateScale(300, 0.1),
    height: moderateScale(300, 0.1),
    borderRadius: moderateScale(500, 0.1),
  },
});

export default TopLeftCircleProp;