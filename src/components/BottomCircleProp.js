import {Animated,StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import { screenWidth } from '../constants/ScreenResolution';
import { lightPurple } from '../constants/Color';

const BottomCircleProp = () => {
  const CirclePropBottomAnimation = new Animated.Value(screenWidth + 150);

  useEffect(() => {
    startAnimations();
  }, []);

  const startAnimations = () => {
    Animated.timing(CirclePropBottomAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
        style={[
          styles.CirclePropBottom,
          {transform: [{translateY: CirclePropBottomAnimation}]},
        ]}
      />
  )
}
const styles = StyleSheet.create({
    CirclePropBottom: {
      position: 'absolute',
      bottom: moderateScale(-200, 0.1),
      left: moderateScale(-70, 0.1),
      backgroundColor: lightPurple,
      width: moderateScale(380, 0.1),
      height: moderateScale(380, 0.1),
      borderRadius: moderateScale(500, 0.1),
      opacity: 0.3,
      zIndex: -10,
    }
  });
export default BottomCircleProp