import React, {useContext} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { black, white } from '../constants/Index';
import { AppContext } from '../context/AppContext';

const CustomPicker = ({ selectedService, setSelectedService, style, options, placeholder }) => {
  const {theme} = useContext(AppContext);
  const pickerStyle = {
    inputIOS: style,
    inputAndroid: style,
    placeholder: {color: theme == 'dark' ? white : black},
  };

  return (
    <RNPickerSelect
      selectedValue={selectedService}
      onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}
      items={options}
      style={pickerStyle}
      placeholder={{
        label: placeholder,
        value: null,
    }}
    />
  );
};

export default CustomPicker;
