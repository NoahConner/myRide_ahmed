import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
  Text,
} from 'react-native';
import {
  KumbhSansExtraBold,
  black,
  gray,
  purple,
  red,
  screenWidth,
  white,
} from '../constants/Index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import Button from './Button';
import {moderateScale} from 'react-native-size-matters';

const Input = ({
  placeholder,
  value,
  setValue,
  type,
  style,
  placeholderTextColor,
  textAlign,
  fontFamily,
  fontSize,
  disabled,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prevState => !prevState);
  };

  const inputAnimation = new Animated.Value(screenWidth + 250);

  useEffect(() => {
    startInputAnimation();
  }, []);

  const startInputAnimation = () => {
    Animated.timing(inputAnimation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const inputAnimationStyle = {
    ...styles.container,
    ...(isActive && styles.activeContainer),
    ...style,
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <View style={inputAnimationStyle}>
      {type === 'date' && (
        <>
          <TextInput
            disabled={disabled}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            placeholder={placeholder}
            value={selectedDate.toDateString()}
            onChangeText={setValue}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            textAlign={textAlign}
            fontFamily={fontFamily}
            fontSize={fontSize}
          />
          <TouchableOpacity
            style={styles.calendarButton}
            onPress={() => setShowModal(true)}>
            <Icon name="calendar-alt" size={15} color={purple} />
          </TouchableOpacity>
          <Modal
            visible={showModal}
            transparent
            animationType="slide"
            onRequestClose={() => setShowModal(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.rowContainer}>
                  <DatePicker
                    date={selectedDate}
                    onDateChange={handleDateChange}
                    mode="date"
                    textColor={black}
                    style={styles.datePicker}
                  />
                  <View style={styles.buttonContainer}>
                    <Button
                      style={styles.modalButton}
                      fontSize={moderateScale(14)}
                      backgroundColor={purple}
                      color={white}
                      text="Select"
                      padding={moderateScale(0)}
                      textAlign="center"
                      borderRadius={moderateScale(0)}
                      width={moderateScale(screenWidth / 2 - 30)}
                      onPress={() => {
                        setValue(selectedDate.toISOString());
                        setShowModal(false);
                      }}
                    />
                    <Button
                      style={styles.modalButton}
                      fontSize={moderateScale(14)}
                      backgroundColor={red}
                      color={white}
                      text="Cancel"
                      padding={moderateScale(0)}
                      textAlign="center"
                      borderRadius={moderateScale(0)}
                      width={moderateScale(screenWidth / 2 - 30)}
                      onPress={() => {
                        setShowModal(false);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </>
      )}
      {type === 'text' && (
        <TextInput
          disabled={disabled}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          placeholderTextColor={placeholderTextColor}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          textAlign={textAlign}
          fontFamily={fontFamily}
          fontSize={fontSize}
        />
      )}
      {type === 'number' && (
        <TextInput
          disabled={disabled}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          placeholderTextColor={placeholderTextColor}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          textAlign={textAlign}
          fontFamily={fontFamily}
          fontSize={fontSize}
          keyboardType={'numeric'}
        />
      )}
      {type === 'password' && (
        <>
          <TextInput
            disabled={disabled}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            textAlign={textAlign}
            fontFamily={fontFamily}
            fontSize={fontSize}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={toggleSecureTextEntry}>
            <Icon
              name={secureTextEntry ? 'eye' : 'eye-slash'}
              size={15}
              color={purple}
            />
          </TouchableOpacity>
        </>
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
  },
  activeContainer: {
    borderBottomColor: purple,
  },
  input: {
    flex: 1,
    padding: 8,
    color: black,
  },
  eyeButton: {
    padding: 8,
  },
  calendarButton: {
    padding: 8,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: white,
    borderRadius: 10,
    padding: 16,
    width: screenWidth,
    alignSelf: 'center',
  },
  modalCloseButton: {
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    color: purple,
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
});

export default Input;
