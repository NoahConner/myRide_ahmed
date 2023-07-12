import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';
import { black } from '../constants/Index';

const CustomPicker = ({ selectedService, setSelectedService, style, options }) => {
  const pickerStyle = {
    inputIOS: style,
    inputAndroid: style,
    placeholder: styles.placeholder,
  };

  return (
    <RNPickerSelect
      selectedValue={selectedService}
      onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}
      items={options}
      style={pickerStyle}
    />
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: black,
  },
});

export default CustomPicker;
