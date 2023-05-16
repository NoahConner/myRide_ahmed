import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { gray, purple, white } from '../constants/Color';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ placeholder, value, setValue, type }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prevState => !prevState);
  };

  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        secureTextEntry={type === 'password' && secureTextEntry}
      />
      {type === 'password' && (
        <TouchableOpacity style={styles.eyeButton} onPress={toggleSecureTextEntry}>
          <Icon
            name={secureTextEntry ? 'eye' : 'eye-slash'}
            size={25}
            color={white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  activeContainer: {
    borderBottomColor: purple,
  },
  input: {
    flex: 1,
    padding: 8,
  },
  eyeButton: {
    padding: 8,
  },
});

export default Input;
