import React, { useEffect, useRef, useState } from 'react';
import { Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const Heading = ({
  text,
  fontSize,
  fontFamily,
  color,
  textAlign,
  style,
  truncate,
}) => {
  const [isTouched, setIsTouched] = useState(false);
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

  const handlePressIn = () => {
    setIsTouched(true);
  };

  const handlePressOut = () => {
    setIsTouched(false);
  };

  const truncatedText = truncate && text.length > truncate
    ? text.substring(0, truncate) + '...'
    : text;

  return (
    <Animated.View
      style={[headingAnimationStyle, style]}
    >
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <Text style={{ fontSize, fontFamily, color, textAlign }}>
          {isTouched ? text : truncatedText}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Heading;
