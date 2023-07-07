import { Picker } from '@react-native-picker/picker';
import React from 'react';

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
