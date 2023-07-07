import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaskInput from 'react-native-mask-input';
import { moderateScale } from 'react-native-size-matters';
import ImagePickerOptions from '../../components/ImagePickerOptions';
import {
  Button,
  DrawerHeader,
  Heading,
  Icon,
  Input,
  RbSheet,
  ViewHeader,
} from '../../components/Index';
import {
  KumbhSansExtraBold,
  backgroundColor,
  black,
  darkGray,
  emailRegex,
  gray,
  purple,
  screenWidth,
  white
} from '../../constants/Index';
import { AppContext, useAppContext } from '../../context/AppContext';

const PersonalInformation = ({}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [sheet, setSheet] = useState(false);
  const {user, theme, role} = useAppContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const [illustratorProp] = useState(new Animated.Value(screenWidth + 250));
  useEffect(() => {
    startAnimations();
  }, []);

  useEffect(() => {
    if (
      firstName === '' ||
      lastName === '' ||
      !emailRegex.test(email) ||
      email === '' ||
      contact === '' ||
      address === '' ||
      imageSource === ''
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [firstName, lastName, email, contact, address, imageSource]);
  useEffect(() => {
    setEmail(user?.email);
    setFirstName(user?.first_name);
    setLastName(user?.last_name);
    setContact(user?.phone);
    setAddress(user?.address);
    setImageSource(user?.image);
  }, []);
  const startAnimations = () => {
    Animated.timing(illustratorProp, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={{flex: 1, backgroundColor: theme == 'dark' ? black : white}}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <ViewHeader
        heading="Personal Information"
        icon={'home'}
        headingColor={theme == 'dark' ? white : darkGray}
        fontSize={20}
        style={styles.header}
        navigation={navigation}
        path={'Home'}
      />
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {backgroundColor: theme == 'dark' ? black : white},
        ]}>
        <View>
          <Heading
            text="Edit Information"
            fontSize={moderateScale(18)}
            fontFamily={KumbhSansExtraBold}
            color={purple}
            textAlign="left"
            style={styles.heading}
          />
          <View style={styles.profileForm}>
            <View style={styles.prfoileImageContainer}>
              {imageSource ? (
                <Image
                  source={{uri: imageSource}}
                  resizeMode="cover"
                  style={styles.profileImage}
                />
              ) : (
                <Image
                  source={require('../../../assets/Images/AppLogo.png')}
                  resizeMode="cover"
                  style={styles.profileImage}
                />
              )}
              <TouchableOpacity
                style={styles.editButtonContainer}
                onPress={() => setSheet(true)}>
                <Icon
                  name={'edit'}
                  style={styles.editButton}
                  size={13}
                  color={white}
                />
              </TouchableOpacity>
            </View>
            <Input
              value={firstName}
              setValue={setFirstName}
              placeholder="First Name"
              type="text"
              style={styles.input}
              placeholderTextColor={theme == 'dark' ? white : black}
              color={theme == 'dark' ? white : black}
            />
            <Input
              value={lastName}
              setValue={setLastName}
              placeholder="Last Name"
              type="text"
              style={styles.input}
              placeholderTextColor={theme == 'dark' ? white : black}
              color={theme == 'dark' ? white : black}
            />
            <Input
              value={email}
              setValue={null}
              disabled={true}
              placeholder="Email Address"
              type="text"
              style={styles.input}
              placeholderTextColor={theme == 'dark' ? white : black}
              color={theme == 'dark' ? white : black}
            />
            <MaskInput
              style={[styles.maskInput,{borderColor: isActive ? purple : gray, color: theme == 'dark'? white : black}]}
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
              value={address}
              setValue={setAddress}
              placeholder="Address"
              type="text"
              style={styles.input}
              placeholderTextColor={theme == 'dark' ? white : black}
              color={theme == 'dark' ? white : black}
            />
            <Button
              disabled={disabled}
              fontSize={moderateScale(14)}
              backgroundColor={purple}
              color={white}
              text="Save"
              padding={moderateScale(10)}
              textAlign="center"
              borderRadius={moderateScale(100)}
              width="50%"
              style={styles.saveButton}
              onPress={() => {
                console.log('Information Save');
              }}
            />
          </View>
        </View>
      </ScrollView>
      <RbSheet sheet={sheet} setSheet={setSheet}>
        <ImagePickerOptions
          setImageSource={setImageSource}
          setSheet={setSheet}
        />
      </RbSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  keyboardContainer: {
    flex: 1,
  },
  header: {
    marginTop: moderateScale(20),
  },
  heading: {
    paddingLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  profileForm: {
    marginTop: moderateScale(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prfoileImageContainer: {
    position: 'relative',
    width: moderateScale(100),
    marginBottom: moderateScale(30),
  },
  editButtonContainer: {
    backgroundColor: purple,
    width: moderateScale(30),
    height: moderateScale(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(0),
    right: moderateScale(0),
    borderRadius: moderateScale(100),
    borderColor: white,
    borderWidth: moderateScale(1),
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(100),
  },
  input: {
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    width: moderateScale(screenWidth - 40),
    borderRadius: moderateScale(5),
  },
  maskInput: {
    borderBottomWidth: 1,
    width: '100%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: moderateScale(15),
  },
  saveButton: {
    marginTop: moderateScale(20),
  },
  prop: {
    marginVertical: moderateScale(30),
    width: moderateScale(200),
  },
});

export default PersonalInformation;
