import {Animated,StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {purple} from '../constants/Color';
import { screenWidth } from '../constants/ScreenResolution';

const TopLeftCircleProp = () => {
  const CirclePropleftAnimation = new Animated.Value(-screenWidth + 150);

  useEffect(() => {
    startAnimations();
  }, []);
  const startAnimations = () => {
    Animated.timing(CirclePropleftAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={[
        styles.CirclePropTopleft,
        {transform: [{translateX: CirclePropleftAnimation}]},
      ]}
    />
  );
};
const styles = StyleSheet.create({
  CirclePropTopleft: {
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
