import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useToast} from 'react-native-toast-notifications';
import {
  BottomCircleProp,
  Button,
  Heading,
  Input,
  TopLeftCircleProp,
} from '../../components/Index';
import AxiosConfig from '../../constants/Axios';
import {alertToast, notification} from '../../constants/HelperFunctions';
import {
  KumbhSansExtraBold,
  backgroundColor,
  black,
  emailRegex,
  gray,
  primaryHeadingColor,
  purple,
  screenWidth,
  white,
} from '../../constants/Index';
import {AppContext} from '../../context/AppContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);
  const navigation = useNavigation();
  const {setToken, setUser, setRole, theme} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const toast = useToast();
  useEffect(() => {
    startAnimations();
  }, []);
  useEffect(() => {
    if (email === '' || password === '' || !emailRegex.test(email)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);
  const login = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (data) {
      setLoading(true);
      setDisabled(true);
      await AxiosConfig.post('auth/login', data)
        .then(res => {
          if (res) {
            setToken(res?.data?.access_token);
            setUser(res?.data?.user);
            setRole(res?.data?.user?.role?.toLowerCase());
            notification(toast, res?.data?.message, 'bottom');
          }
        })
        .catch(err => {
          alertToast(toast, err?.response?.data?.error, 'danger');
          setLoading(false);
          setDisabled(false);
        });
    }
  };
  const startAnimations = () => {
    Animated.timing(GirlAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(MobileAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'dark' ? black : backgroundColor},
      ]}>
      <TopLeftCircleProp />
      <View style={styles.headingBox}>
        <Heading
          style={null}
          text="Sign in to continue"
          fontSize={moderateScale(40)}
          fontFamily={KumbhSansExtraBold}
          color={theme == 'dark' ? white : primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
            color={theme == 'dark' ? white : black}
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Password"
            value={password}
            setValue={setPassword}
            type="password"
            color={theme == 'dark' ? white : black}
          />
        </View>
        <Button
          style={null}
          fontSize={moderateScale(12)}
          backgroundColor={null}
          color={purple}
          text="Forgot Password?"
          padding={moderateScale(0)}
          textAlign="right"
          borderRadius={moderateScale(0)}
          width="100%"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <View style={styles.signInButtonContainer}>
          <Button
            disabled={disabled}
            loading={loading}
            style={null}
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Sign In"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width={moderateScale(screenWidth / 3)}
            onPress={() => login()}
          />
        </View>
        <View style={styles.dontHaveBox}>
          <Text style={styles.dontHaveBoxText}>Don't have an account?</Text>
          <Button
            style={null}
            fontSize={moderateScale(12)}
            backgroundColor={null}
            color={purple}
            text="Sign Up Now!"
            padding={moderateScale(0)}
            textAlign="center"
            borderRadius={moderateScale(0)}
            width="30%"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
      <BottomCircleProp />
      <Animated.Image
        style={[styles.GirlProp, {transform: [{translateX: GirlAnimation}]}]}
        resizeMode="contain"
        source={require('../../../assets/Images/girlProp.png')}
      />
      <Animated.Image
        style={[
          styles.MobileProp,
          {transform: [{translateY: MobileAnimation}]},
        ]}
        resizeMode="contain"
        source={require('../../../assets/Images/mobileProp.png')}
      />
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
  GirlProp: {
    position: 'absolute',
    bottom: moderateScale(10),
    alignItems: 'center',
    width: moderateScale(200),
    resizeMode: 'contain',
    height: moderateScale(180),
    zIndex: -1,
  },
  MobileProp: {
    position: 'absolute',
    bottom: moderateScale(10),
    right: moderateScale(10),
    width: moderateScale(200),
    resizeMode: 'contain',
    height: moderateScale(180),
    zIndex: -1,
  },
});

export default Login;
