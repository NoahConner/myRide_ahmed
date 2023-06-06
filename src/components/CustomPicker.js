import {View, Text} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const CustomPicker = ({
  selectedService,
  setSelectedService,
  style,
  options,
}) => {
  return (
    <Picker
      style={style}
      selectedValue={selectedService}
      onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}>
      {options.map((option, index) => (
        <Picker.Item label={option.label} value={option.value} key={index} />
      ))}
    </Picker>
  );
};

export default CustomPicker;
