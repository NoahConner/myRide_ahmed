import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Button, Heading, Input } from '../../components/Index';
import {
  KumbhSansExtraBold,
  backgroundColor,
  black,
  gray,
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
  const {setToken, setUser, theme} = useContext(AppContext);
  useEffect(() => {
    startAnimations();
  }, []);

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
  const signUp = () => {
    setUser({firstName, lastName, contact, password, email})
    setToken(true)
  }
  return (
    <KeyboardAvoidingView style={[styles.container,{backgroundColor:theme == 'dark' ? black : backgroundColor}]} behavior="height" enabled>
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
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Contact"
            value={contact}
            setValue={setContact}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={{marginBottom: 16}}
            placeholder="Password"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <Input
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
            style={null}
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Register Now"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            onPress={() => signUp() }
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
});

export default SignUp;
