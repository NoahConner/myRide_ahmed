import React, {useEffect, useRef} from 'react';
import {Image, Animated} from 'react-native';

const SplashBackgrounAnimation = ({backgroundState}) => {
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!backgroundState) {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [backgroundState, fadeAnimation]);

  const backgroundImageSource = require('../../assets/Images/AppSplashBg.png');

  return (
    backgroundImageSource && (
      <Animated.View style={{opacity: fadeAnimation}}>
        <Image source={backgroundImageSource} />
      </Animated.View>
    )
  );
};

export default SplashBackgrounAnimation;
