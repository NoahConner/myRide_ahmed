import React, {useEffect, useRef} from 'react';
import {Image, Animated} from 'react-native';

const SplashBackgroundAnimation = ({backgroundState}) => {
  const scaleAnimation = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    if (!backgroundState) {
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [backgroundState, scaleAnimation]);

  const backgroundImageSource = require('../../../assets/Images/AppSplashBg.png');

  return (
    backgroundImageSource && (
      <Animated.Image
        source={backgroundImageSource}
        resizeMode="cover"
        style={{
          transform: [{scale: scaleAnimation}],
        }}
      />
    )
  );
};

export default SplashBackgroundAnimation;
