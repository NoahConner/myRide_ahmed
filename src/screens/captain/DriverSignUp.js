import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppContext, useAppContext} from '../../context/AppContext';
import {
  Heading,
  Button,
  Input,
  TopLeftCircleProp,
  BottomCircleProp,
  CustomPicker,
} from '../../components/Index';
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
  const [carCapacity, setCarCapacity] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const CarAnimation = new Animated.Value(-screenWidth + 250);
  const navigation = useNavigation();
  const {setToken, setUser} = useAppContext(AppContext);

  useEffect(() => {
    startAnimations();
  }, []);
  const services = [
    {label: 'Basic', value: 'Basic'},
    {label: 'Standard', value: 'Standard'},
    {label: 'Premium', value: 'Premium'},
  ];
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
          style={styles.heading}
          text="Fill this form to complete sign up!"
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Contact"
            value={contact}
            setValue={setContact}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="City"
            value={city}
            setValue={setCity}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="State"
            value={state}
            setValue={setState}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Car Maker"
            value={carMaker}
            setValue={setCarMaker}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Model"
            value={model}
            setValue={setModel}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Car Year"
            value={carYear}
            setValue={setCarYear}
            type="text"
          />
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Car Color"
            value={carColor}
            setValue={setCarColor}
            type="text"
          />
          <View style={styles.SelectBorderContainer}>
            <CustomPicker
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              style={styles.select}
              options={services}
            />
            <View style={styles.SelectBorder}></View>
          </View>
          <Input
            placeholderTextColor={black}
            style={styles.input}
            placeholder="Car Capacity"
            value={carCapacity}
            setValue={setCarCapacity}
            type="text"
          />
        </View>
        <View style={styles.signInButtonContainer}>
          <Button
            style={styles.button}
            fontSize={moderateScale(14)}
            backgroundColor={purple}
            color={white}
            text="Send"
            padding={moderateScale(10)}
            textAlign="center"
            borderRadius={moderateScale(100)}
            width="50%"
            onPress={signUp}
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
    alignItems: 'center',
    position: 'relative',
    padding: moderateScale(30),
  },
  headingBox: {
    width: moderateScale(screenWidth - 100),
  },
  heading: {
    marginBottom: moderateScale(20),
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
  select: {
    width: moderateScale(screenWidth / 2 - 60),
    marginVertical: moderateScale(10),
    color: black,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  SelectBorderContainer: {
    position: 'relative',
  },
  SelectBorder: {
    position: 'absolute',
    bottom: moderateScale(10),
    width: '100%',
    height: moderateScale(1),
    backgroundColor: gray,
  },
  signInButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  button: {
    width: '50%',
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
    marginRight: moderateScale(5),
  },
  signInButton: {
    width: '30%',
  },
  CarProp: {
    width: moderateScale(200),
    height: moderateScale(180),
  },
});

export default CapatainSignUp;
