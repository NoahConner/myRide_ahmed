import React from 'react';
import {Modal, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Button from './Button';
import {green, screenWidth, white} from '../constants/Index';
import Icon from './Icon';

const CustomModal = ({
  visible,
  onClose,
  content,
  backgroundColor,
  buttonText,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, {backgroundColor}]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="times" size={20} color={white} />
          </TouchableOpacity>
          {content}
          <Button
            style={styles.modalButton}
            fontSize={moderateScale(14)}
            backgroundColor={green}
            color={white}
            text={buttonText}
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width={moderateScale(screenWidth / 2 - 30)}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 10,
    position: 'relative',
  },
  modalButton: {
    position: 'absolute',
    bottom: moderateScale(-20),
  },
  closeButton:{
    position: 'absolute',
    top: moderateScale(15),
    right: moderateScale(15),
  }
});

export default CustomModal;
