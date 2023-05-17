import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import {gray, primaryHeadingColor, purple, white} from '../../constants/Color';
import {moderateScale} from 'react-native-size-matters';
import {screenWidth} from '../../constants/ScreenResolution';
import Heading from '../../components/Heading';
import {KumbhSansExtraBold} from '../../constants/Fonts';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TopLeftCircleProp from '../../components/TopLeftCircleProp';
import BottomCircleProp from '../../components/BottomCircleProp';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const GirlAnimation = new Animated.Value(screenWidth + 250);
  const MobileAnimation = new Animated.Value(screenWidth + 250);
  const navigation:any = useNavigation();
  useEffect(() => {
    startAnimations();
  }, []);

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
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <TopLeftCircleProp />
      <View style={styles.headingBox}>
        <Heading
          text="Sign in to continue"
          fontSize={moderateScale(40, 0.1)}
          fontFamily={KumbhSansExtraBold}
          color={primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
          <Input
            placeholder="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
        </View>
        <Button
          fontSize={moderateScale(12, 0.1)}
          backgroundColor={null}
          color={purple}
          text="Forgot Password?"
          padding={moderateScale(0, 0.1)}
          textAlign="right"
          borderRadius={moderateScale(0, 0.1)}
          width="100%"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <View style={styles.signInButtonContainer}>
          <Button
            fontSize={moderateScale(14, 0.1)}
            backgroundColor={purple}
            color={white}
            text="Sign In"
            padding={moderateScale(10, 0.1)}
            textAlign="center"
            borderRadius={moderateScale(100, 0.1)}
            width="50%"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View style={styles.dontHaveBox}>
          <Text style={styles.dontHaveBoxText}>Don't have an account?</Text>
          <Button
            fontSize={moderateScale(12, 0.1)}
            backgroundColor={null}
            color={purple}
            text="Sign Up Now!"
            padding={moderateScale(0, 0.1)}
            textAlign="center"
            borderRadius={moderateScale(0, 0.1)}
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
    width: moderateScale(screenWidth - 100, 0.1),
  },
  InputBox: {
    marginTop: moderateScale(20, 0.1),
  },
  signInButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15, 0.1),
  },
  dontHaveBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: moderateScale(15, 0.1),
  },
  dontHaveBoxText: {
    color: gray,
  },
  GirlProp: {
    position: 'absolute',
    bottom: moderateScale(10, 0.1),
    right: moderateScale(100, 0.1),
    width: moderateScale(200, 0.1),
    resizeMode: 'contain',
    height: moderateScale(180, 0.1),
  },
  MobileProp: {
    position: 'absolute',
    bottom: moderateScale(10, 0.1),
    right: moderateScale(40, 0.1),
    width: moderateScale(200, 0.1),
    resizeMode: 'contain',
    height: moderateScale(180, 0.1),
  },
});

export default Login;
