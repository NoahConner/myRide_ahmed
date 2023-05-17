import React, {useEffect, useRef} from 'react';
import {View, Image, Animated, StyleSheet} from 'react-native';
import {screenHeight} from '../../constants/ScreenResolution';

const topValue = screenHeight - 150;

const SplashLogoAnimation = ({setBackgroundState, setModalView}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(animation, {
        toValue: topValue - screenHeight,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      setModalView(true);
      setBackgroundState(false);
    };
    const timeout = setTimeout(startAnimation, 2000);

    return () => clearTimeout(timeout);
  }, [animation, setBackgroundState, setModalView]);

  return (
    <Animated.View
      style={[styles.content, {transform: [{translateY: animation}]}]}>
      <View style={styles.blackBox}>
        <Animated.View
          style={[
            styles.arrowContainer,
            {transform: [{translateY: animation}]},
          ]}>
          <Image
            source={require('../../../assets/Images/AppLogo.png')}
            resizeMode="cover"
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    top: screenHeight / 2,
  },
  blackBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  arrowContainer: {
    alignItems: 'center',
  },
});

export default SplashLogoAnimation;
