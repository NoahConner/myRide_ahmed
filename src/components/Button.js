import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  black,
  gray,
  lightPurple,
  lightestPurple,
  white,
} from '../constants/Index';

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
  style,
  fontFamily,
  disabled,
  loading,
}) => {
  console.log(disabled, 'disabled');
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        {backgroundColor, width, borderRadius, padding},
        style,
        disabled && styles.disabledButton,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          style={styles.finRideButton}
          size="small"
          color={white}
        />
      ) : (
        <Text
          style={[
            styles.buttonText,
            {color, fontSize, textAlign, fontFamily},
            disabled && styles.disabledText,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: gray,
    borderWidth: 1,
    borderColor: gray,
  },
  disabledText: {
    color: white,
  },
});

export default Button;
