import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import { green, linearGradient, screenWidth, white } from '../constants/Index';
import Button from './Button';
import Icon from './Icon';

const CustomModal = ({
  visible,
  onClose,
  content,
  backgroundColor,
  buttonText,
  times,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={linearGradient}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={[styles.modalContent, {backgroundColor}]}>
          {times ? (
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Icon name="times" size={20} color={white} />
            </TouchableOpacity>
          ) : null}
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
            width={moderateScale(screenWidth / 2)}
            onPress={onClose}
          />
        </LinearGradient>
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
    paddingHorizontal: moderateScale(40),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 10,
    position: 'relative',
    width:moderateScale(screenWidth - 50)
  },
  modalButton: {
    position: 'absolute',
    bottom: moderateScale(-20),
  },
  closeButton: {
    position: 'absolute',
    top: moderateScale(15),
    right: moderateScale(15),
  },
});

export default CustomModal;
