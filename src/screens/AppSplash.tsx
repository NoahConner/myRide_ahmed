import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import { screenHeight } from '../constants/ScreenResolution';
const topValue = screenHeight - 150;
const AppSplash = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [backgroundState, setBackgroundState] = useState(true);
  const [animation] = useState(new Animated.Value(0));
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const startAnimation = () => {
      setOverlayVisible(false);
      Animated.timing(animation, {
        toValue: topValue - screenHeight,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setBackgroundState(false); // Set backgroundState to false after the animation is complete
      });
    };
  
    const timeout = setTimeout(startAnimation, 2000);
  
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (!backgroundState) {
      // Start fade-out animation
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 5000, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }
  }, [backgroundState, fadeAnimation]);
  const backgroundImageSource = require('../../assets/Images/AppSplashBg.png');

  return (
    <SafeAreaView style={styles.container}>
      {backgroundState && backgroundImageSource && (
      <Animated.Image
        source={backgroundImageSource}
        style={[styles.backgroundImage, { opacity: fadeAnimation }]}
      />
    )}
      {overlayVisible && <View style={styles.overlay} />}
      <Animated.View
        style={[styles.content, {transform: [{translateY: animation}]}]}>
        <View style={styles.blackBox}>
          <Animated.View
            style={[
              styles.arrowContainer,
              {transform: [{translateY: animation}]},
            ]}>
            <Image source={require('../../assets/Images/AppLogo.png')} />
          </Animated.View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
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

export default AppSplash;
