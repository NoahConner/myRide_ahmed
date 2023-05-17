import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({
  backgroundColor,
  text,
  width,
  onPress,
  color,
  textAlign,
  borderRadius,
  padding,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor, width, borderRadius, padding}}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={{color, fontSize, textAlign}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};


export default Button;
