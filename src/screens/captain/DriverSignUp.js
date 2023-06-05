import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from 'react-native';
import {
  gray,
  primaryHeadingColor,
  purple,
  white,
  KumbhSansExtraBold,
  screenWidth,
  black,
} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../context/AppContext';
import {
  Heading,
  Button,
  Input,
  TopLeftCircleProp,
  BottomCircleProp,
} from '../../components/Index';
const CapatainSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [carMaker, setCarMaker] = useState('');
  const [model, setModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [service, setService] = useState('');
  const [carCapacity, setCarCapacity] = useState('');
  const CarAnimation = new Animated.Value(-screenWidth + 250);
  const navigation = useNavigation();
  const {setToken, setUser} = useContext(AppContext);
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
    setUser({firstName, lastName, contact, password, email});
    setToken(true);
  };
  return (
      <ScrollView contentContainerStyle={styles.container}>
      <TopLeftCircleProp />
        <View style={styles.headingBox}>
          <Heading
            style={null}
            text="Fill this form to
            complete sign up!"
            fontSize={moderateScale(20)}
            fontFamily={KumbhSansExtraBold}
            color={primaryHeadingColor}
            textAlign="left"
          />
          <View style={styles.InputBox}>
            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="First Name"
                value={firstName}
                setValue={setFirstName}
                type="text"
              />
            </View>
            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Last Name"
                value={lastName}
                setValue={setLastName}
                type="text"
              />
            </View>
            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Email"
                value={email}
                setValue={setEmail}
                type="text"
              />
            </View>
            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Contact"
                value={contact}
                setValue={setContact}
                type="text"
              />
            </View>
            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="City"
                value={city}
                setValue={setCity}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="State"
                value={state}
                setValue={setState}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Car Maker"
                value={carMaker}
                setValue={setCarMaker}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Model"
                value={model}
                setValue={setModel}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Car Year"
                value={carYear}
                setValue={setCarYear}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Car Color"
                value={carColor}
                setValue={setCarColor}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Service"
                value={service}
                setValue={setService}
                type="text"
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholderTextColor={black}
                style={[styles.input, {marginBottom: 16}]}
                placeholder="Car Capacity"
                value={carCapacity}
                setValue={setCarCapacity}
                type="text"
              />
            </View>
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
              onPress={() => signUp()}
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
              textAlign="center"
              borderRadius={moderateScale(0)}
              width="30%"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
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
        source={require('../../../assets/Images/captainSignUpProp.png')}
      />
      <BottomCircleProp />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    padding: moderateScale(30),
  },
  headingBox: {
    width: moderateScale(screenWidth - 100),
  },
  InputBox: {
    marginTop: moderateScale(20),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    width: moderateScale(screenWidth / 2 - 60),
    marginVertical: moderateScale(10),
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

export default CapatainSignUp;
