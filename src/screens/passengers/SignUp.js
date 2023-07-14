import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskInput from 'react-native-mask-input';
import OTPTextInput from 'react-native-otp-textinput';
import { moderateScale } from 'react-native-size-matters';
import { useToast } from 'react-native-toast-notifications';
import { Button, Heading, Input, Loader, OtpModal } from '../../components/Index';
import AxiosConfig from '../../constants/Axios';
import { alertToast, notification } from '../../constants/HelperFunctions';
import {
  KumbhSansExtraBold,
  backgroundColor,
  black,
  emailRegex,
  gray,
  lightPurple,
  linearGradient,
  primaryHeadingColor,
  purple,
  screenWidth,
  white,
} from '../../constants/Index';
import { AppContext } from '../../context/AppContext';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const CarAnimation = new Animated.Value(-screenWidth + 250);
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const {theme} = useContext(AppContext);
  const toast = useToast();
  useEffect(() => {
    startAnimations();
  }, []);
  useEffect(() => {
    if (
      !firstName ||
      !lastName ||
      !contact ||
      !email ||
      !password ||
      !confirmpassword ||
      !emailRegex.test(email)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [firstName, lastName, contact, email, password, confirmpassword]);
  const startAnimations = () => {
    Animated.sequence([
      Animated.timing(CarAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(CarAnimation, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const otp = async () => {
    if (password != confirmpassword) {
      alertToast(toast, "Password and confirm password don't match", 'danger');
      return;
    }
    setLoading(true);
    setDisabled(true);
    await AxiosConfig.post('otp', {email: email})
      .then(res => {
        if (res) {
          setLoading(false);
          setVisible(true);
        }
      })
      .catch(err => {
        alertToast(toast, err?.response?.data?.error, 'danger');
        setLoading(false);
        setDisabled(false);
      });
  };
  const handleOTPChange = e => {
    if (e?.length == 4) {
      const data = {
        fname: firstName,
        lname: lastName,
        phone: contact,
        email: email,
        password: password,
        role: 'passenger',
        otp: e,
      };
      if(data){
        setVisible(false)
        setLoader(true);
        register(data);
      }
    }
  };
  const register = async data => {
    await AxiosConfig.post('auth/register', data)
      .then(res => {
        if (res) {
          notification(toast, res?.data?.message, 'bottom');
          setLoader(false);
          navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  return loader ? (
    <Loader />
  ) : (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {backgroundColor: theme == 'dark' ? black : backgroundColor},
      ]}
      behavior="padding"
      enabled>
      <Animated.Image
        style={[
          styles.CarProp,
          {
            transform: [
              {
                translateY: CarAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-screenWidth + 250, 0],
                }),
              },
              {
                scale: CarAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          },
        ]}
        resizeMode="contain"
        source={require('../../../assets/Images/SignUpProp.png')}
      />
      <View style={styles.headingBox}>
        <Heading
          style={null}
          text="Sign Up"
          fontSize={moderateScale(40)}
          fontFamily={KumbhSansExtraBold}
          color={theme == 'dark' ? white : primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            disabled={loading}
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            type="text"
          />
          <Input
            disabled={loading}
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            type="text"
          />
          <Input
            disabled={loading}
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
          <MaskInput
            style={[
              styles.maskInput,
              {
                borderColor: isActive ? purple : gray,
                color: theme == 'dark' ? white : black,
              },
            ]}
            value={contact}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            onChangeText={(masked, unmasked) => {
              setContact(masked);
            }}
            mask={[
              '(',
              /\d/,
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
          <Input
            disabled={loading}
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <Input
            disabled={loading}
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Confirm Password"
            value={confirmpassword}
            setValue={setConfirmPassword}
            type="password"
          />
        </View>
        <View style={styles.signInButtonContainer}>
          <Button
            disabled={disabled}
            loading={loading}
            style={null}
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Register Now"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            onPress={() => otp()}
          />
        </View>
        <View style={styles.dontHaveBox}>
          <Text style={styles.dontHaveBoxText}>Already have an account?</Text>
          <Button
            style={null}
            fontSize={moderateScale(12)}
            backgroundColor={null}
            color={purple}
            text="Sign In!"
            padding={moderateScale(0)}
            textAlign="left"
            borderRadius={moderateScale(0)}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
      <OtpModal visible={visible} setVisible={setVisible} handleOTPChange={handleOTPChange}/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headingBox: {
    width: moderateScale(screenWidth - 100),
  },
  InputBox: {
    marginTop: moderateScale(20),
  },
  signInButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  dontHaveBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: moderateScale(15),
  },
  dontHaveBoxText: {
    color: gray,
  },
  CarProp: {
    width: moderateScale(200),
    resizeMode: 'contain',
    height: moderateScale(180),
  },
  maskInput: {
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: moderateScale(10),
    paddingLeft: moderateScale(10),
    paddingVertical: moderateScale(5),
  },
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

export default SignUp;
