import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  gray, lightGray, white
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
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
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
  buttonText: {
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: gray,
    borderWidth: 1,
    borderColor: gray,
  },
  disabledText: {
    color: lightGray,
  },
});

export default Button;
