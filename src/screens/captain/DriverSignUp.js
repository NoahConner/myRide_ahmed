import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, ScrollView, Modal, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppContext, useAppContext} from '../../context/AppContext';
import {
  Heading,
  Button,
  Input,
  TopLeftCircleProp,
  BottomCircleProp,
  CustomPicker,
  UploadDocument
} from '../../components/Index';
import {
  gray,
  primaryHeadingColor,
  purple,
  white,
  KumbhSansExtraBold,
  screenWidth,
  black,
  linearGradient,
  InterRegular,
  backgroundColor,
} from '../../constants/Index';
import {moderateScale} from 'react-native-size-matters';
import {selectDocument} from '../../constants/HelperFunctions';
import LinearGradient from 'react-native-linear-gradient';
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
  const {setToken, theme, setRole} = useAppContext(AppContext);
  const [driverFile, setDriverFile] = useState('');
  const [registrationFile, setRegistrationFile] = useState('');
  const [insuranceFile, setInsuranceFile] = useState('');
  const [liscencePlateFile, setLiscencePlateFile] = useState('');
  const [carFile, setCarFile] = useState('');
  const [visible, setVisible] = useState('');
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
    setVisible(true);
  };
  useEffect(() => {
    if(visible){
      setTimeout(() => {
        setVisible(false)
        setRole("Driver")
        setToken(true);
      }, 5000);
    }
  }, [visible])
  
  return (
    <ScrollView contentContainerStyle={[styles.container,{backgroundColor:theme == 'dark' ? black : backgroundColor}]}>
      <TopLeftCircleProp />
      <View style={styles.headingBox}>
        <Heading
          style={styles.heading}
          text="Fill this form to complete sign up!"
          fontSize={moderateScale(20)}
          fontFamily={KumbhSansExtraBold}
          color={theme == 'dark' ? white : primaryHeadingColor}
          textAlign="left"
        />
        <View style={styles.InputBox}>
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Email"
            value={email}
            setValue={setEmail}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Contact"
            value={contact}
            setValue={setContact}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="City"
            value={city}
            setValue={setCity}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="State"
            value={state}
            setValue={setState}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Car Maker"
            value={carMaker}
            setValue={setCarMaker}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Model"
            value={model}
            setValue={setModel}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Car Year"
            value={carYear}
            setValue={setCarYear}
            type="text"
          />
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
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
              style={[styles.select,{color:theme == 'dark' ? white : black}]}
              options={services}
            />
            <View style={styles.SelectBorder}></View>
          </View>
          <Input
            placeholderTextColor={theme == 'dark' ? white : black}
            color={theme == 'dark' ? white : black}
            style={styles.input}
            placeholder="Car Capacity"
            value={carCapacity}
            setValue={setCarCapacity}
            type="text"
          />
        </View>
        <View>
          <UploadDocument
            headingText="Driver Liscence"
            truncate={13}
            onPress={() => selectDocument(setDriverFile)}
            document={driverFile}
          />
          <UploadDocument
            headingText="Car Registration"
            truncate={13}
            onPress={() => selectDocument(setRegistrationFile)}
            document={registrationFile}
          />
          <UploadDocument
            headingText="Car Insurance"
            truncate={13}
            onPress={() => selectDocument(setInsuranceFile)}
            document={insuranceFile}
          />
          <UploadDocument
            headingText="Picture of Liscence Plate"
            truncate={13}
            onPress={() => selectDocument(setLiscencePlateFile)}
            document={liscencePlateFile}
          />
          <UploadDocument
            headingText="Picture of Car"
            truncate={13}
            onPress={() => selectDocument(setCarFile)}
            document={carFile}
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
      <BottomCircleProp />
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
            <Image
              style={styles.StopWatchProp}
              resizeMode="contain"
              source={require('../../../assets/Images/CaptainSignStopwatch.png')}
            />
            <Heading
              style={styles.heading}
              text="Your Request has been sent successfully"
              fontSize={moderateScale(12)}
              fontFamily={InterRegular}
              color={white}
              textAlign="center"
            />
            <Heading
              style={styles.heading}
              text="Kindly wait for Approval"
              fontSize={moderateScale(20)}
              fontFamily={InterRegular}
              color={white}
              textAlign="center"
            />
            <Heading
              style={styles.heading}
              text="Your approval will send through email or phone no."
              fontSize={moderateScale(14)}
              fontFamily={InterRegular}
              color={white}
              textAlign="center"
            />
          </LinearGradient>
        </View>
      </Modal>
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
    width: moderateScale(screenWidth - 80),
    marginTop: moderateScale(50),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(167, 141, 213, 0.7)',
  },
  modalContent: {
    paddingHorizontal: moderateScale(40),
    paddingTop: moderateScale(80),
    paddingBottom: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: moderateScale(30),
    borderColor: black,
    borderWidth: moderateScale(1),
    position: 'relative',
  },
  StopWatchProp: {
    position: 'absolute',
    width: moderateScale(100),
    top: moderateScale(-30),
    alignItems: 'center',
  },
  modalButton: {
    position: 'absolute',
    bottom: moderateScale(-20),
  },
  closeButton: {
    position: 'absolute',
    top: moderateScale(15),
    right: moderateScale(15),
  },
});

export default CapatainSignUp;
