import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Heading from './Heading';
import OTPTextInput from 'react-native-otp-textinput';
import { moderateScale } from 'react-native-size-matters';
import { KumbhSansExtraBold, lightPurple, linearGradient, white } from '../constants/Index';
const OtpModal = ({visible,setVisible, handleOTPChange}) => {
  return (
    <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={linearGradient}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={[styles.modalContent]}>
            <Heading
              style={{paddingBottom: moderateScale(20)}}
              text="Enter Your OTP"
              fontSize={moderateScale(18)}
              fontFamily={KumbhSansExtraBold}
              color={white}
              textAlign="left"
            />
            <OTPTextInput
              textInputStyle={{color: white}}
              autoFocus={true}
              tintColor={white}
              offTintColor={lightPurple}
              handleTextChange={e => handleOTPChange(e)}
            />
          </LinearGradient>
        </View>
      </Modal>
  )
}
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(167, 141, 213, 0.7)',
    },
    modalContent: {
      paddingHorizontal: moderateScale(50),
      paddingVertical: moderateScale(50),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'purple',
      borderRadius: moderateScale(10),
      position: 'relative',
    },
  });
export default OtpModal