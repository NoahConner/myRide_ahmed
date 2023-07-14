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
import {alertToast, notification} from '../constants/HelperFunctions';
import {useToast} from 'react-native-toast-notifications';
const ChangePassword = ({route}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const {theme} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [routeParam, setRouteParam] = useState(route.params);
  const toast = useToast();
  useEffect(() => {
    console.log(routeParam);
    if (routeParam?.screen == 'forgetPassword') {
      if (newPassword === '' || confirmPassword === '') {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    } else {
      if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [oldPassword, newPassword, confirmPassword]);
  const changPass = async () => {
    if(newPassword != confirmPassword) {
        alertToast(toast, "Password and confirm password don't match", 'danger');
        return
    }
    const data = {
        email:routeParam?.email,
        password:newPassword
    }
    setDisabled(true);
    setLoading(true);
    await AxiosConfig.post('auth/changePassword', data)
      .then(res => {
        if (res) {
          notification(toast, res?.data?.message, 'bottom');
          setLoading(false);
          setVisible(true);
          navigation.navigate('Login')
        }
      })
      .catch(err => {
        alertToast(toast, err?.response?.data?.error, 'danger');
        setLoading(false);
        setDisabled(false);
      });
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
          text="Change Password"
          fontSize={moderateScale(30)}
          fontFamily={KumbhSansExtraBold}
          color={theme == 'dark' ? white : primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          {routeParam?.screen != 'forgetPassword' && (
            <Input
              placeholderTextColor={theme == 'dark' ? white : black}
              color={theme == 'dark' ? white : black}
              style={{marginBottom: 16}}
              placeholder="Old Password"
              value={oldPassword}
              setValue={setOldPassword}
              type="password"
            />
          )}
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="New Password"
            value={newPassword}
            setValue={setNewPassword}
            type="password"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Confirm Password"
            value={confirmPassword}
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
            text="Change"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            onPress={() => {
              changPass();
            }}
          />
        </View>
      </View>
      <BottomCircleProp />
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

export default ChangePassword;
