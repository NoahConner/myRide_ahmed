import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Icon = ({
  name,
  size,
  color,
  style,
  solid
}) => {
  return (
    <View style={[style]}>
      <FontAwesome5 name={name} solid={solid} size={size} color={color} />
    </View>
  );
};

export default Icon;
