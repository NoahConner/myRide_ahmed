import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, KeyboardAvoidingView, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import TopLeftCircleProp from '../components/TopLeftCircleProp';
import { KumbhSansExtraBold } from '../constants/Fonts';
import { primaryHeadingColor, purple, white } from '../constants/Color';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomCircleProp from '../components/BottomCircleProp';
import { screenWidth } from '../constants/ScreenResolution';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    startAnimations();
  }, []);

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
        friction: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <TopLeftCircleProp />
      <View style={styles.headingBox}>
        <Heading
          text="Forget Password"
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
        </View>
        <View style={styles.signInButtonContainer}>
          <Button
            fontSize={moderateScale(14, 0.1)}
            backgroundColor={purple}
            color={white}
            text="Send"
            padding={moderateScale(10, 0.1)}
            textAlign="center"
            borderRadius={moderateScale(100, 0.1)}
            width="50%"
            onPress={() => {}}
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
  QuestionMarkProp: {
    position: 'absolute',
    bottom: moderateScale(10, 0.1),
    right: moderateScale(100, 0.1),
    width: moderateScale(200, 0.1),
    resizeMode: 'contain',
    height: moderateScale(180, 0.1),
  },
});

export default ForgotPassword;
