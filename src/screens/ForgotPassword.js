import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  BottomCircleProp,
  Button,
  Heading,
  Input,
  Loader,
  OtpModal,
  TopLeftCircleProp,
} from '../components/Index';
import {
  KumbhSansExtraBold,
  backgroundColor,
  black,
  emailRegex,
  primaryHeadingColor,
  purple,
  screenWidth,
  white,
} from '../constants/Index';
import {AppContext} from '../context/AppContext';
import AxiosConfig from '../constants/Axios';
import { alertToast, notification } from '../constants/HelperFunctions';
import { useToast } from 'react-native-toast-notifications';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const {theme} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const toast = useToast();
  useEffect(() => {
    startAnimations();
  }, []);
  useEffect(() => {
    if (
      !email || !emailRegex.test(email)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email]);
  const handleOTPChange = e => {
    if (e?.length == 4) {
      const data = {
        email: email,
        otp: e,
      };
      if(data){
        setVisible(false)
        setLoader(true);
        verifyOtp(data);
      }
    }
  };
  const forgetPasswordOtp = async () => {
    setDisabled(true);
    setLoading(true);
    await AxiosConfig.post('auth/forgetPasswordOtp', {email: email})
      .then(res => {
        if (res) {
          notification(toast, res?.data?.message, 'bottom');
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
  const verifyOtp = async (data) => {
    await AxiosConfig.post('auth/verifyOtp', data)
    .then(res => {
      if (res) {
        setVisible(false);
        setLoader(false);
        notification(toast, res?.data?.message, 'bottom');
        navigation.navigate('ChangePassword', {email:email, screen:'forgetPassword'})
      }
    })
    .catch(err => {
      alertToast(toast, err?.response?.data?.error, 'danger');
      setLoading(false);
      setDisabled(false);
    });
  }
  const QuestionMarkAnimation = new Animated.Value(screenWidth + 250);

  const startAnimations = () => {
    Animated.sequence([
      Animated.timing(QuestionMarkAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(QuestionMarkAnimation, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return loader ? (
    <Loader />
  ) : (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'dark' ? black : backgroundColor},
      ]}>
      <TopLeftCircleProp />
      <View style={styles.headingBox}>
        <Heading
          style={null}
          text="Forget Password"
          fontSize={moderateScale(40)}
          fontFamily={KumbhSansExtraBold}
          color={theme == 'dark' ? white : primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
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
            text="Send"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            onPress={() => {forgetPasswordOtp()}}
          />
        </View>
      </View>
      <Animated.Image
        style={[
          styles.QuestionMarkProp,
          {
            transform: [
              {
                translateY: QuestionMarkAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [screenWidth + 250, 0],
                }),
              },
              {
                scale: QuestionMarkAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          },
        ]}
        resizeMode="contain"
        source={require('../../assets/Images/QuestionMarkProp.png')}
      />
      <BottomCircleProp />
      <OtpModal visible={visible} setVisible={setVisible} handleOTPChange={handleOTPChange}/>
    </View>
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
  QuestionMarkProp: {
    position: 'absolute',
    bottom: moderateScale(10),
    right: moderateScale(100),
    width: moderateScale(200),
    resizeMode: 'contain',
    height: moderateScale(180),
    zIndex: -1,
  },
});

export default ForgotPassword;
