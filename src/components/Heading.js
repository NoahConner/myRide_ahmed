import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

const Heading = ({ text, fontSize, fontFamily, color, textAlign }) => {
  const headingAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headingAnimation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const headingAnimationStyle = {
    opacity: headingAnimation,
    transform: [
      {
        translateX: headingAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[headingAnimationStyle]}>
      <Text style={{ fontSize, fontFamily, color, textAlign }}>{text}</Text>
    </Animated.View>
  );
};

export default Heading;
