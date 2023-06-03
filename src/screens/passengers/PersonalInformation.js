import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { DrawerHeader, Heading, Icon, Input, ViewHeader } from '../../components/Index';
import { moderateScale } from 'react-native-size-matters';
import {
  KumbhSansExtraBold,
  KumbhSansExtraRegular,
  backgroundColor,
  black,
  darkGray,
  gray,
  lightGray,
  purple,
  screenWidth,
  white,
} from '../../constants/Index';

const PersonalInformation = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <DrawerHeader navigate={navigation} />
      <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" keyboardVerticalOffset={100}>
        <ViewHeader
          heading="Personal Information"
          icon={'home'}
          headingColor={darkGray}
          fontSize={20}
          style={styles.header}
          navigation={navigation}
          path={'Home'}
        />
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
            <Image
              source={require('../../../assets/Images/AppLogo.png')}
              resizeMode="cover"
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButtonContainer}>
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
            placeholderTextColor={gray}
          />
          <Input
            value={lastName}
            setValue={setLastName}
            placeholder="Last Name"
            type="text"
            style={styles.input}
            placeholderTextColor={gray}
          />
          <Input
            value={email}
            setValue={null}
            disabled={true}
            placeholder="Email Address"
            type="text"
            style={styles.input}
            placeholderTextColor={gray}
          />
          <Input
            value={number}
            setValue={setNumber}
            placeholder="Contact No."
            type="text"
            style={styles.input}
            placeholderTextColor={gray}
          />
          <Input
            value={address}
            setValue={setAddress}
            placeholder="Address"
            type="text"
            style={styles.input}
            placeholderTextColor={gray}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
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
    // width: moderateScale(screenWidth - 40),
    paddingLeft:moderateScale(20),
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
    backgroundColor: lightGray,
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
    width: moderateScale(screenWidth - 40),
    borderRadius: moderateScale(5),
  },
});

export default PersonalInformation;
