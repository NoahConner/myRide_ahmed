import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  Button,
  CustomPicker,
  DrawerHeader,
  Input,
  TopLeftCircleProp,
  ViewHeader,
} from '../../components/Index';
import {
  backgroundColor,
  black,
  darkGray,
  gray,
  green,
  screenHeight,
  screenWidth,
  white,
} from '../../constants/Index';
import { AppContext } from '../../context/AppContext';
const AccountInformation = ({}) => {
  const banks = [
    {label: 'ABC Bank', value: 'ABC Bank'},
    {label: 'DEF Bank', value: 'DEF Bank'},
    {label: 'GHI Bank', value: 'GHI Bank'},
  ];
  const navigation = useNavigation();
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedBranchCode, setSelectedBranchCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const {theme} = useContext(AppContext);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'dark' ? black : white},
      ]}>
      <DrawerHeader
        navigate={navigation}
        style={{paddingBottom: moderateScale(10)}}
      />
      <ViewHeader
        heading="Account Information"
        icon={'home'}
        headingColor={theme == 'dark' ? white : darkGray}
        fontSize={20}
        style={styles.header}
        navigation={navigation}
        path={'Home'}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.SelectBorderContainer}>
          <CustomPicker
          placeholder={'Select Bank'}
            selectedService={selectedBank}
            setSelectedService={setSelectedBank}
            style={[styles.select,{color:theme == 'dark' ? white : black}]}
            options={banks}
          />
          <View style={styles.SelectBorder}></View>
        </View>
        <Input
          placeholderTextColor={theme == 'dark' ? white : black}
          color={theme == 'dark' ? white : black}
          style={styles.input}
          placeholder="Branch Code"
          value={selectedBranchCode}
          setValue={setSelectedBranchCode}
          type="text"
        />
        <Input
          placeholderTextColor={theme == 'dark' ? white : black}
          color={theme == 'dark' ? white : black}
          style={styles.input}
          placeholder="Account No/ IBAN"
          value={accountNumber}
          setValue={setAccountNumber}
          type="text"
        />
        <Button
          fontSize={moderateScale(14)}
          backgroundColor={green}
          color={white}
          text="Add Account"
          style={styles.buttonContainer}
          padding={moderateScale(10)}
          textAlign="center"
          borderRadius={moderateScale(100)}
          width={moderateScale(screenWidth / 2)}
          onPress={() => navigation.navigate('AccountInformation')}
        />
      </ScrollView>
      <TopLeftCircleProp style={{top: moderateScale(screenHeight - 150)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  scrollContent: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: moderateScale(20),
  },
  header: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  select: {
    width: moderateScale(screenWidth - 30),
    marginVertical: moderateScale(10),
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingLeft:moderateScale(10),
    paddingBottom:moderateScale(10)
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
  input: {
    width: moderateScale(screenWidth - 30),
    marginVertical: moderateScale(10),
  },
});

export default AccountInformation;
